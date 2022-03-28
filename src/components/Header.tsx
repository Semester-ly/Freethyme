import Share from "./Share";
import Edit from "./Edit";
import Add from "./Add";
import { useAppSelector } from "../app/hooks";

const Header = ({name}) => {
    const meetingName = useAppSelector(state=> state.meeting.name);

    return (
        <div className="row">
        <div className="col">
          <h4>{meetingName}</h4>
        </div>

        <div className="col text-right">
          <h4>{name}</h4>
        </div>
        
        
        <div className="col">
          <Add/>
        </div>
        

        <div className="col">
          <Share/>
        </div>
      </div>
    )
}

export default Header;