import { RootState } from "../store";
// import { UsersState } from "./slice";
export const selectUsers = (state: RootState) => state.users;
