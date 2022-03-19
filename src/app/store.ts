import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import meetingNameReducer from '../pages/meetingNameSlice';


export const store = configureStore({
  reducer: {
    meetingName: meetingNameReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
