import { configureStore } from '@reduxjs/toolkit';
import { baseQuery } from './apiSlice';
import authSlice from './authSlice'; 

const store = configureStore({
  reducer: {
    auth: authSlice, 
    [baseQuery.reducerPath]: baseQuery.reducer,
  }
});

export default store;
