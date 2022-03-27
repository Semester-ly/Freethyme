import React, { useState } from "react"
import { TimeSlotType } from "./TimeSlot";

const Member = () => {
    const [name, setName] = useState("");
    const [timeSlots, setTimeSlots] = useState<TimeSlotType[]>([]);

    return (
        <div>
            <h2 className="typography__Subtitle-jsvm8p-0 ScheduleSelector__DateLabel-sc-1ke4ka2-4 kyrNqB dqyTox">Participants</h2>
        </div>
    )
}

export default Member;

export interface MemberType {
    id: number;
    name: string;
    timeSlots: string[];
};