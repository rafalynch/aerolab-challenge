import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderBy: "default",
  },
  reducers: {
    setAsc: (state) => {
      state.orderBy = "asc";
    },
    setDesc: (state) => {
      state.orderBy = "desc";
    },
    setDefault: (state) => {
      state.orderBy = "default";
    },
  },
});

export const { setAsc, setDesc, setDefault } = orderSlice.actions;
export const selectOrder = (state: any) => state.order.orderBy;
export default orderSlice.reducer;
