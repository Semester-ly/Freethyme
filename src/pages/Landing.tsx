import { FormControl, TextField, Grid, GridList } from '@material-ui/core'
import { useAppDispatch } from '../app/hooks'
import { createMeeting } from './meetingNameSlice'
import { useNavigate } from 'react-router-dom'
import '../styles/button.css'

function Landing(){
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return(
    <>
      <Grid 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
  
      <FormControl>
        <TextField
          fullWidth 
          placeholder="Name the Meeting:"
          aria-label="Name the Meeting:"
          onChange={(event)=>dispatch(createMeeting(event.target.value))}
        />
       
        <button className="btn btn--add btn__text" onClick={() => navigate("/create")}>
            Create
        </button>
       
      </FormControl>
      </Grid>
      
    </>

  )
}

export default Landing;

