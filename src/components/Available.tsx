import React from 'react';
import { useAppSelector } from '../app/hooks';
const Available = () => {
    const members = useAppSelector(state => state.meeting.hoveredMembers)

    return (
        <div style = {{fontSize: "20px", fontFamily: "cursive"}}>
            Available members: {members.join(", ")}
        </div>
    )
}

export default Available;