import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  AppReducer  from '../slice';

export const store = configureStore({
  reducer: {
    AppReducer: AppReducer

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
