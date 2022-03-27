import React, { useState } from "react"

const Participants = () => {
    const [name, setName] = useState("");
    const [timeSlots, setTimeSlots] = useState<string[]>([]);

    return (
        <div>
            <h2 className="typography__Subtitle-jsvm8p-0 ScheduleSelector__DateLabel-sc-1ke4ka2-4 kyrNqB dqyTox">Participants</h2>
        </div>
    )
}

export default Participants;

export interface ParticipantType {
    id: number
    name: string;
    timeSlots: string[];
};