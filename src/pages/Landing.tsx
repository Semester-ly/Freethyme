import { Grid, GridList } from '@material-ui/core'
import { useAppDispatch } from '../app/hooks'
import { useNavigate } from 'react-router-dom'
import '../styles/button.css'
import CreateMeeting from '../components/CreateMeeting'

function Landing(){

  return(
    <>
      <CreateMeeting/>
    </>

  )
}

export default Landing;

