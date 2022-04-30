import { TimeSlotType } from "../components/TimeSlot"

export function convertTStoDate(slots: TimeSlotType[]){
    const dayMap : any = {"Monday":0, "Tuesday":1, "Wednesday":2, "Thursday":3, "Friday":4, "Saturday":5, "Sunday":6} as Object
    const start = getNextMonday();
    const startYear = start.getFullYear();
    let startDayOfMonth = start.getDate();
    const startMonth = start.getMonth()
    let converted = [] as Date[]
    // need to extract hours from no of mins
    slots.forEach(slot => {
        let slotDay = dayMap[slot.day] as number
        // 1410 becomes 23.5
        let hourFloat = slot.timeStart/60
        let hour = Math.floor(hourFloat)
        let minutes = 60 * (hourFloat % 1) // 30 or 0
        converted.push(new Date(startYear, startMonth, startDayOfMonth + slotDay, hour, minutes))
    });
    return converted
}

export function convertDatetoTS(dates: Date[], meetingId:number, memberId:number ) {
    const timeData = dates.map((date: Date)=>{
        const formattedDate = new Intl.DateTimeFormat('en-GB', { weekday: 'long', hour: 'numeric', minute: 'numeric' }).format(date);
        // "Saturday 23:30"
        const [day, time] = formattedDate.split(" ");
        const [hour, minute] = time.split(":");
        const timeStart = parseInt(hour) * 60 + parseInt(minute);
        const timeEnd = timeStart + 30;
        const data = {
          id : meetingId,
          memberId,
          day,
          timeStart,
          timeEnd
        };
        return data;
      });
    return timeData
}

export function getNextMonday() {
  let d = new Date();
  // get next Monday (or today if today is Monday)
  d.setDate(d.getDate() + ((7-d.getDay())%7+1) % 7);
  return d;
}

