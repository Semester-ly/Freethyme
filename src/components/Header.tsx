import Share from "./Share";
import Add from "./Add";
import Delete from "./Delete";
import { useAppSelector } from "../app/hooks";

const Header = () => {
    const meetingName = useAppSelector(state=> state.meeting.name);

    return (
        <div className="row">
        <div className="col">
          <h4>{meetingName}</h4>
        </div>

        <div className="col text-right">
          <h4>{}</h4>
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