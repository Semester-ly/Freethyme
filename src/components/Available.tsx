import React from 'react';
import { useAppSelector } from '../app/hooks';
const Available = () => {
    const members = useAppSelector(state => state.meeting.hoveredMembers)

    return (
        <div style = {{marginTop: "0%", marginLeft: "-170%", fontSize: "20px", fontFamily: "cursive"}}>
            Available members: {members.join(", ")}
        </div>
    )
}

export default Available;