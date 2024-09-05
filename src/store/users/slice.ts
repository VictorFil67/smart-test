import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./operations";
import { getUsersThunk } from "./operations";

export interface UsersState {
  error: string | null;
  users: User[];
  filteredName: string;
  filteredUsername: string;
  filteredEmail: string;
  filteredPhone: string;
}
const initialState: UsersState = {
  error: null,
  users: [],
  filteredName: "",
  filteredUsername: "",
  filteredEmail: "",
  filteredPhone: "",
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilteredName(state, { payload }) {
      state.filteredName = payload;
    },
    setFilteredUsername(state, { payload }) {
      state.filteredUsername = payload;
    },
    setFilteredEmail(state, { payload }) {
      state.filteredEmail = payload;
    },
    setFilteredPhone(state, { payload }) {
      state.filteredPhone = payload;
    },
  },
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
export const {
  setFilteredName,
  setFilteredUsername,
  setFilteredEmail,
  setFilteredPhone,
} = slice.actions;
