import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'
interface MeetingNameState {
  id: string
  meetingName: string
}

const initialState: MeetingNameState = {
  id: "",
  meetingName: ""
}

export const meetingNameSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    createMeeting: (state, action: PayloadAction<string>)=>{
      state.meetingName = action.payload
      console.log(state.meetingName)
    }
  }
})

export const { createMeeting } = meetingNameSlice.actions;
export const selectMeetingName = (state: RootState) => state.meetingName.meetingName
export default meetingNameSlice.reducer
