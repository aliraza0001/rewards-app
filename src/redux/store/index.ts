import {configureStore} from '@reduxjs/toolkit';
import rewards from '@app/redux/slice/rewards';

const rootReducer = {
  rewards,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
