import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export const getUsersThunk = createAsyncThunk<
  User[],
  void,
  { rejectValue: string }
>("shop/getAllProducts", async (_, thunkAPI) => {
  try {
    const { data } = await api<User[]>(`users`);
    return data;
  } catch (error: any) {
    const errorMessage: string = error.response?.data?.message ?? error.message;
    return thunkAPI.rejectWithValue(errorMessage);
  }
});
