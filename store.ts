import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/orderSlice";
import pageIndexReducer from "./features/pageIndexSlice";

export default configureStore({
  reducer: {
    order: orderReducer,
    page: pageIndexReducer,
  },
});
