import { addMember, selectMembers, setCurMemberId, setCurMemberName, setCurMemberSlots } from "../pages/meetingSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import * as API from "../api/api";
import { useState } from "react";
import { TextField } from '@material-ui/core';
import { TimeSlotType } from "./TimeSlot";

const Add = () => {
    const dispatch = useAppDispatch();
    const [memberName, setMemberName] = useState("");
    const meetingId = useAppSelector(state => state.meeting.id);
    const members = useAppSelector(state => state.meeting.members);
    const memberSlots = useAppSelector(state => state.meeting.curMemberSlots);
    const selectedMembers = useAppSelector(state => state.meeting.selectedMembers);

    
    const addMemberName = (event: any) => {
        const element = event.currentTarget as HTMLInputElement;
        setMemberName(element.value);
    };
    
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        // treat "A" the same as "A   "
        const trimmedName = memberName.trim()
        if (trimmedName === "") {
            alert("Name can't be blank!");
            return;
        }
        if (selectedMembers.length !== 0) {
            alert("Unselect all members to add new availability!")
            return;
        }
        for (let i = 0; i < members.length; i++) {
            if (members[i].name === trimmedName) {
                alert("Member with this name already exists!");
                return;
            }
        }
    
        // new member
        
        let data = await API.addNewMember(meetingId, trimmedName);  
        console.log("create new member")   
        dispatch(setCurMemberId(data.id));
        dispatch(setCurMemberName(data.name));
        dispatch(addMember({ id: data.id, name: data.name, timeSlots: data.timeSlots }));

        // memberId is undefined in slots at this point
        const memberSlotsWithId = memberSlots.map((slot: TimeSlotType) => {
            return {...slot, memberId: data.id}
        })

        API.setAvail(meetingId, data.id, memberSlotsWithId)
        
    };

    return (
        <div className = "row">    
            <div className="col" style={{padding: "40px"}}>
                <TextField 
                    placeholder="Your name..."
                    value={memberName}
                    onChange={addMemberName}
                />
            </div>
            <div className="col">
                <button 
                    type="submit" 
                    className="btn btn--add btn__text"
                    onClick={handleSubmit}
                    >
                    Add
                </button>
            </div>
        </div>
    )
}

export default Add;
