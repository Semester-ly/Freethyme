import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import meetingReducer from '../pages/meetingSlice';


export const store = configureStore({
  reducer: {
    meeting: meetingReducer
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
