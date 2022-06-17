import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import  AppReducer  from '../slice';
import { RootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware({});
export const store = configureStore({
  reducer: {
    AppReducer: AppReducer,
  },
  middleware: [ sagaMiddleware ]
});

sagaMiddleware.run(RootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
