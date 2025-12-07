import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/redux/slice/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// RootState tipe dari seluruh store
export type RootState = ReturnType<typeof store.getState>;

// Dispatch type (opsional tapi bagus untuk TS)
export type AppDispatch = typeof store.dispatch;
