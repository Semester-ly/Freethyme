import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { removeMember } from '../pages/meetingSlice';
import * as API from "../api/api";
const Delete = () => {
    const dispatch = useAppDispatch();
    const selectedMembers = useAppSelector(state => state.meeting.selectedMembers);
    const meetingId = useAppSelector(state => state.meeting.id);
    const handleClick = () => {
        if (selectedMembers.length === 0) {
            alert("No members selected!");
            return;
        }
        selectedMembers.forEach((memberId) => {
            API.removeMember(meetingId, memberId);
            dispatch(removeMember(memberId));
        })

    }
    return (
        <div>
            <button 
                className="btn btn--delete btn__text" 
                onClick={handleClick}>
                Delete
            </button>           
        </div>
    )
}

export default Delete;
