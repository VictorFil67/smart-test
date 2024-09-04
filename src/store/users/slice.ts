import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./operations";
import { getUsersThunk } from "./operations";

interface UsersState {
  error: string | null;
  users: User[];
}
const initialState: UsersState = {
  error: null,
  users: [],
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(
        getUsersThunk.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.users = action.payload;
        }
      )
      .addCase(
        getUsersThunk.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.error = action.payload || null;
        }
      );
  },
});

export const reducer = slice.reducer;
