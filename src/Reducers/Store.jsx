// store.jsx

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './apiSlice'; 
import authReducer from './authSlice';

const store = configureStore ({
  reducer: {
    auth: authReducer,
    [baseQuery.reducerPath]: baseQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseQuery.middleware),
});

setupListeners(store.dispatch);

export default store; 
