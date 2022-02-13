import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/orderSlice";

export default configureStore({
  reducer: {
    order: orderReducer,
  },
});
