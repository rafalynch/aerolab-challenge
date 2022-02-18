import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {} as User,
  },
  reducers: {
    setUserData(state, payload) {
      state.userData = payload.payload;
    },
    subtractPoints(state, payload) {
      state.userData.points = state.userData.points - payload.payload;
    },
    addPoints(state, payload) {
      state.userData.points = state.userData.points + payload.payload;
    },
  },
});

export const { setUserData, subtractPoints, addPoints } = userSlice.actions;
export const selectPoints = (state: any) => state.user.userData.points;
export const selectUserData = (state: any) => state.user.userData;
export default userSlice.reducer;
