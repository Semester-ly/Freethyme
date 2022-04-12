import { addMember, setCurMemberId, setCurMemberName } from "../pages/meetingSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import * as API from "../api/api";
import { FormEvent, useState } from "react";
import { TextField } from '@material-ui/core';

const Add = () => {
    const dispatch = useAppDispatch();
    const [memberName, setMemberName] = useState("");
    const meetingId = useAppSelector(state => state.meeting.id)
    
    const updateMemberName = (event: any) => {
        const element = event.currentTarget as HTMLInputElement;
        setMemberName(element.value);
    };
    
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        let data = await API.addNewMember(meetingId, memberName);     
        dispatch(setCurMemberId(data.id));
        dispatch(setCurMemberName(data.name));
        dispatch(addMember({ id: data.id, name: data.name, timeSlots: data.timeSlots }));
    };

    return (
        <div className = "row">    
            <div className="col" style={{padding: "40px"}}>
                <TextField 
                    placeholder="New member name"
                    value={memberName}
                    onChange={updateMemberName}
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
