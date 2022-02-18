import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/orderSlice";
import pageIndexReducer from "./features/pageIndexSlice";
import userReducer from "./features/userSlice";

export default configureStore({
  reducer: {
    order: orderReducer,
    page: pageIndexReducer,
    user: userReducer,
  },
});
