import React, { useState } from "react"
import Share from "./Share";
import Edit from "./Edit";
import Add from "./Add";
import { useAppSelector } from "../app/hooks";

const Header = ({name}) => {
    const meetingName = useAppSelector(state=> state.meeting.name);

    return (
        <div className="row">
        <div className="col-5">
          <h4>{meetingName}</h4>
        </div>

        <div className="col-5 text-right">
          <h4>{name}</h4>
        </div>
        
        
        <div className="col-1">
          <Add/>
        </div>
        

        <div className="col-1">
          <Share/>
        </div>
      </div>
    )
}

export default Header;