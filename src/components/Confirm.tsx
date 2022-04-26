import React from 'react';
import * as API from "../api/api";
import { useAppSelector } from '../app/hooks';

const Confirm = () => {
    const meetingId = useAppSelector(state => state.meeting.id);
    const memberId = useAppSelector(state => state.meeting.curMemberId);
    const curMemberSlots = useAppSelector(state => state.meeting.curMemberSlots);
    const selectedMembers = useAppSelector(state => state.meeting.selectedMembers)

    const handleClick = () => {
        if (selectedMembers.length !== 1) {
            alert("Select one member to update their availability!");
            return;
        }
        API.setAvail(meetingId, memberId, curMemberSlots)
    }
    return (
        <div>
            <button 
                className="btn btn--confirm btn__text" 
                onClick={handleClick}>
                Confirm
            </button>           

        </div>
    )
}

export default Confirm;
