import {configureStore} from '@reduxjs/toolkit';
import rewards from '@app/redux/slice/rewards';
// For React Query
// import {api} from '@app/config/api/apiClient';

const rootReducer = {
  rewards,
  // For React Query
  // [api.reducerPath]: api.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  // For React Query
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
