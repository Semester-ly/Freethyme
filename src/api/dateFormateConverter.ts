import { TimeSlotType } from "../components/TimeSlot"

export function convertTStoDate(slots: TimeSlotType[]){
    const dayMap : any = {"Sunday":0, "Monday":1, "Tuesday":2, "Wednesday":3, "Thursday":4, "Friday":5, "Saturday":6} as Object
    const present = new Date();
    const currYear = present.getFullYear();
    let currDayOfMonth = present.getDate();
    let currWeekday = present.getDay();
    const currMonth = present.getMonth()
    let converted = [] as Date[]
    // need to extract hours from no of mins
    slots.forEach(slot => {
        let daysToAdd;
        let slotDay = dayMap[slot.day] as number
        daysToAdd = slotDay - currWeekday
        // 1410 becomes 23.5
        let hourFloat = slot.timeStart/60
        let hour = Math.floor(hourFloat)
        let minutes = 60 * (hourFloat % 1) // 30 or 0
        converted.push(new Date(currYear, currMonth, currDayOfMonth + daysToAdd, hour, minutes))
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

