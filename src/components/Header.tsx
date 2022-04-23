import Share from "./Share";
import Add from "./Add";
import Delete from "./Delete";
import Available from "./Available";
import { useAppSelector } from "../app/hooks";

const Header = () => {
    const meetingName = useAppSelector(state=> state.meeting.name);

    return (
        <div className="row">
        <div className="col">
          <h4 style = {{marginTop: "10%", fontSize: "54px", fontFamily: "cursive"}}>{meetingName}</h4>
        </div>

        <div className="col text-right">
          <Available/>
        </div>
        
        
        <div className="col">
          <Add/>
        </div>
        
        <div className="col">
          <Delete/>
        </div>

        <div className="col">
          <Share/>
        </div>
      </div>
    )
}

export default Header;