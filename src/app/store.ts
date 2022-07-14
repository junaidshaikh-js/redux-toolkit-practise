import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import humanReducer from "../features/human/humanSlice";

export const store = configureStore({
  reducer: {
    humans: humanReducer,
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
