import { createSlice } from "@reduxjs/toolkit";
import { User, Product } from "../types";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {} as User,
    history: [] as Product[],
  },
  reducers: {
    setUserData(state, payload) {
      state.userData = payload.payload;
    },
    setHistory(state, payload) {
      state.history = payload.payload;
    },
  },
});

export const { setUserData, setHistory } = userSlice.actions;
export const selectPoints = (state: any) => state.user.userData.points;
export const selectUserData = (state: any) => state.user.userData;
export const selectHistory = (state: any) => state.user.history;
export default userSlice.reducer;
