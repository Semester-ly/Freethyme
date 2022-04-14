import { useEffect, useState } from "react";
import { setCurMemberSlots } from "../pages/meetingSlice";
import { addAvail } from "./AddAvail";
import { useAppSelector, useAppDispatch } from "../app/hooks";
// @ts-ignore
import ScheduleSelector from "react-schedule-selector";


const Calendar = () => {
    const dispatch = useAppDispatch();
    const meetingId = useAppSelector(state => state.meeting.id);
    const memberId = useAppSelector(state => state.meeting.curMemberId);
    const members = useAppSelector(state => state.meeting.members);
    const curMemberId = useAppSelector(state => state.meeting.curMemberId);
    const curMemberSlots = useAppSelector(state => state.meeting.curMemberSlots);
    const selectedMembers = useAppSelector(state => state.meeting.selectedMembers);


    const [timeSlots, setTimeSlots] = useState<Date[]>([]);
    console.log(timeSlots);

    



    const renderDateCell = (date: Date, selected: boolean, refSetter: (dateCell: HTMLElement | null) => void) => {
        const formattedDate = new Intl.DateTimeFormat('en-GB', { weekday: 'long', hour: 'numeric', minute: 'numeric' }).format(date);
        // "Saturday 23:30"
        const [day, time] = formattedDate.split(" ");
        const [hour, minute] = time.split(":");
        const timeStart = parseInt(hour) * 60 + parseInt(minute);
        const timeEnd = timeStart + 30;

        // default cell color, unselected
        let backColor = "gray";

        // red: show avaliabilities of selected members
        members.forEach((member)=>{
            if (selectedMembers.includes(member.id)) {
                const slots = member.timeSlots;
                slots.forEach((slot)=>{
                    if (slot.day === day 
                        && slot.timeStart === timeStart 
                        && slot.timeEnd === timeEnd) {
                            backColor = "red";
                        }
                });
            }
        });


        if (selected) {
            backColor = "green";
        }

        return (
            <button
                ref={refSetter}
                style={{
                width: "100%",
                height: "100%",
                background: backColor,
                borderRadius: "3px",
                }}
            ></button>
        );

    }


    useEffect(()=>{
        const modified = timeSlots.map(slot => slot.toTimeString());
        dispatch(setCurMemberSlots([...curMemberSlots, ...modified]));        
        addAvail(meetingId, memberId, timeSlots);
    }, [curMemberSlots, dispatch, meetingId, memberId, timeSlots]);

    return (
        <div>
        <ScheduleSelector
            renderDateCell={renderDateCell}
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