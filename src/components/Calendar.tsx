import { useEffect, useState } from "react"
import ScheduleSelector from "react-schedule-selector";
import { addAvail } from "./AddAvail";
import { useAppSelector } from "../app/hooks";

const Calendar = () => {
    const meetingId = useAppSelector(state => state.meeting.id);
    const memberId = useAppSelector(state => state.meeting.curMemberId);

    const [timeSlots, setTimeSlots] = useState([]);

    useEffect(()=>{
        addAvail(meetingId, memberId, timeSlots);
    }, [meetingId, memberId, timeSlots]);

    return (
        <div>
        <ScheduleSelector
            // renderDateCell={renderDateCell}
            selection={timeSlots}
            numDays={7}
            minTime={8}
            maxTime={24}
            hourlyChunks={2}
            dateFormat = "ddd"
            timeFormat = "h:mm A"
            onChange={setTimeSlots}/>

        </div>
    )
}

export default Calendar;