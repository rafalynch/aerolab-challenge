import { createSlice } from "@reduxjs/toolkit";

export const pageIndexSlice = createSlice({
  name: "page",
  initialState: {
    pageIndex: 1,
  },
  reducers: {
    nextPage: (state) => {
      state.pageIndex = state.pageIndex + 1;
    },
    prevPage: (state) => {
      state.pageIndex = state.pageIndex - 1;
    },
    initPage: (state) => {
      state.pageIndex = 1;
    },
  },
});

export const { nextPage, prevPage, initPage } = pageIndexSlice.actions;
export const selectPageIndex = (state: any) => state.page.pageIndex;
export default pageIndexSlice.reducer;
