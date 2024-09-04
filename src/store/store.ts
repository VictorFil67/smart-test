import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./users/slice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    users: reducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;
