import { useState } from "react"
import ScheduleSelector from 'react-schedule-selector';

const Calendar = () => {
    const [timeSlots, setTimeSlots] = useState([]);

    return (
        <div>
        <ScheduleSelector
            selection={timeSlots}
            numDays={7}
            minTime={7}
            maxTime={20}
            // two slots per hour
            hourlyChunks={2}
            dateFormat = "dddd"
            timeFormat = "h:mm"
            // pass function that takes in new slots and updates existing state
            onChange={setTimeSlots}/>

        </div>
    )
}

export default Calendar;