import { useEffect, useState } from "react";
import { setCurMemberId, setCurMemberSlots, updateHoveredMembers } from "../pages/meetingSlice";
import { addAvail } from "./AddAvail";
import { useAppSelector, useAppDispatch } from "../app/hooks";
// @ts-ignore
import ScheduleSelector from "react-schedule-selector";
import { convertTStoDate, convertDatetoTS, getNextMonday } from "../api/dateFormateConverter";
import { updateChangedAlready } from "../pages/meetingSlice";

const Calendar = () => {
    const dispatch = useAppDispatch();
    const meetingId = useAppSelector(state => state.meeting.id);
    const memberId = useAppSelector(state => state.meeting.curMemberId);
    const members = useAppSelector(state => state.meeting.members);
    const curMemberSlots = useAppSelector(state => state.meeting.curMemberSlots);
    const selectedMembers = useAppSelector(state => state.meeting.selectedMembers);
    const changedAlready = useAppSelector(state => state.meeting.changedAlready);

    const [timeSlots, setTimeSlots] = useState<Date[]>([]);

    const handleChange = (event:any) => {
    
        if (selectedMembers.length === 0) {
            setTimeSlots(event)
            dispatch(setCurMemberSlots(convertDatetoTS(timeSlots, meetingId, selectedMembers[0])))
            return;
        }
        // let user select slots only after their previous slots have been fetched
        if (changedAlready === true) {

            setTimeSlots(event)
            dispatch(setCurMemberId(selectedMembers[0]))
            dispatch(setCurMemberSlots(convertDatetoTS(timeSlots, meetingId, selectedMembers[0])))
        } 
    }

    if (selectedMembers.length === 1 && changedAlready === false) {
        for (let i = 0; i < members.length; i++) {
            if (members[i].id === selectedMembers[0]) {
                let convertedDates = convertTStoDate(members[i].timeSlots)
                dispatch(updateChangedAlready(true))
                setTimeSlots(convertedDates)
                break;
            }
        }
    } 

    // make sure that changedAlready is false when we go back to 1 selected member
    if (selectedMembers.length > 1) {
        dispatch(updateChangedAlready(false))
    } 
    // changedAlready is always true when we first reach 0 selected members
    else if (selectedMembers.length === 0 && changedAlready === true) {
        dispatch(updateChangedAlready(false))
        setTimeSlots([])
    }
 
    let d = getNextMonday();

    // console.log(selectedMembers)
    // console.log(members)


    const renderDateCell = (date: Date, selected: boolean, refSetter: (dateCell: HTMLElement | null) => void) => {
        const formattedDate = new Intl.DateTimeFormat('en-GB', { weekday: 'long', hour: 'numeric', minute: 'numeric' }).format(date);
        // "Saturday 23:30"
        const [day, time] = formattedDate.split(" ");
        const [hour, minute] = time.split(":");
        const timeStart = parseInt(hour) * 60 + parseInt(minute);
        const timeEnd = timeStart + 30;

        // default cell color, unselected
        let backColor = "gray";
        let opacity = 1;
        
        let membersInSlot = [] as string[];
        let numMembersInSlot = 0;

        members.forEach((member)=>{
            if (selectedMembers.includes(member.id)) {
                const slots = member.timeSlots;
                slots.forEach((slot)=>{
                    if (slot.day === day 
                        && slot.timeStart === timeStart 
                        && slot.timeEnd === timeEnd) {
                            numMembersInSlot++;
                            membersInSlot.push(member.name);
                        }
                });
            }
        });

        if (selectedMembers.length <= 1) {
            if (selected) {
                backColor = "green"
            } 
        }
        else {
            if (numMembersInSlot !== 0) {
                backColor = "blue"
                opacity = numMembersInSlot/members.length
            } 
        }

        return (
            <button
                ref={refSetter}
                style={{
                width: "100%",
                height: "100%",
                background: backColor,
                opacity: opacity,
                borderRadius: "3px",
                }}
                onMouseOver = { () => {
                    dispatch(updateHoveredMembers(membersInSlot))
                }
                }
            > </button>
        );

    }


    return (
        <div>
        <ScheduleSelector
            renderDateCell={renderDateCell}
            selection={timeSlots}
            startDate={d}
            numDays={7}
            minTime={8}
            maxTime={24}
            hourlyChunks={2}
            dateFormat = "ddd"
            timeFormat = "h:mm A"
            onChange={handleChange}/>

        </div>
    )
}

export default Calendar;