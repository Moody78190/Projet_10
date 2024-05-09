import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import nameReducer from "./nameReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    name: nameReducer,
  },
});

export default store;
