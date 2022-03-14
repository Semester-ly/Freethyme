import React, { useState } from "react"

const Participants = () => {
    // participantData has key-value pairs in the format participant_name: selected_time_slots
    const [participantData, setParticipantData] = useState({})

    return (
        <div>
            <h2 className="typography__Subtitle-jsvm8p-0 ScheduleSelector__DateLabel-sc-1ke4ka2-4 kyrNqB dqyTox">Participants</h2>
        </div>
    )
}

export default Participants;