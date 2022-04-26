import Share from "./Share";
import Add from "./Add";
import Delete from "./Delete";
import Confirm from "./Confirm";
import { useAppSelector } from "../app/hooks";
import { Grid, Box } from '@material-ui/core';

const Header = () => {
    const meetingName = useAppSelector(state=> state.meeting.name);

    return (
        <Grid container spacing={3} justify="center">
          <Grid item>
            <Box margin={"10px"}>
              <h4 style = {{marginTop: "10%", fontSize: "54px", fontFamily: "cursive"}}>{meetingName}</h4>
            </Box>
          </Grid>

          <Grid item>
          <Add/>
          </Grid>

          <Grid item>
          <Delete/>
          </Grid>

          <Grid item>
          <Confirm/>
          </Grid>

          <Grid item justifyContent="flex-end">
          <Share/>
          </Grid>

        </Grid >


      
    )
}

export default Header;