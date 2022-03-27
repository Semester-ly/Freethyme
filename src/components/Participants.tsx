import React, { useState } from "react"

const Participants = () => {
    const [name, setName] = useState("");
    const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>([]);

    return (
        <div>
            <h2 className="typography__Subtitle-jsvm8p-0 ScheduleSelector__DateLabel-sc-1ke4ka2-4 kyrNqB dqyTox">Participants</h2>
        </div>
    )
}

export default Participants;

export interface ParticipantType {
    name: string;
    selectedTimeSlots: string[];
    id: number
};