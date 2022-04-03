import * as API from "../api/api";

async function addAvail(meetingId, memberId, timeSlots) {
  
  const timeData = timeSlots.map((timeSlot)=>{
    const date = new Date(timeSlot);
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

  await API.setAvail(meetingId, memberId, timeData);
  console.log("set member availability succeeded");

}

export { addAvail };