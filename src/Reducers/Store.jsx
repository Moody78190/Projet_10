import { configureStore } from '@reduxjs/toolkit';
import { baseQuery } from './apiSlice';
import authReducer from './authSlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer, 
    [baseQuery.reducerPath]: baseQuery.reducer,
  }
});

export default store;
