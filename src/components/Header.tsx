import React, { useState } from "react"
import Share from "./Share";
import Edit from "./Edit";
import Add from "./Add";
import { useAppSelector } from "../app/hooks";

const Header = ({name}) => {
    const meetingName = useAppSelector(state=> state.meetingName.meetingName);

    const [Header, setHeader] = useState({meetingName:meetingName, userName:"", selectedTimes: false});

    return (
        <div className="row">
        <div className="col-5">
          <h4>{meetingName}</h4>
        </div>

        <div className="col-5 text-right">
          <h4>{name}</h4>
        </div>

        <div className="col-1">
          {/* if user has already selected time then let them edit*/}
          {Header.selectedTimes? <Edit/>: <Add/>}
        </div>

        <div className="col-1">
          <Share/>
        </div>
      </div>
    )
}

export default Header;