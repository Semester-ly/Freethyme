import Share from "./Share";
import Add from "./Add";
import Delete from "./Delete";
import Confirm from "./Confirm";
import { useAppSelector } from "../app/hooks";

const Header = () => {
    const meetingName = useAppSelector(state=> state.meeting.name);

    return (
        <div className="row">
        <div className="col">
          <h4 style = {{marginTop: "10%", fontSize: "54px", fontFamily: "cursive"}}>{meetingName}</h4>
        </div>

        <div className="col text-right">
        </div>
        
        
        <div className="col">
          <Add/>
        </div>
        
        <div className="col">
          <Delete/>
        </div>

        <div className="col">
          <Confirm/>
        </div>

        <div className="col">
          <Share/>
        </div>
      </div>
    )
}

export default Header;