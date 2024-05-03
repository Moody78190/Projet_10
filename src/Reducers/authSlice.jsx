import { createSlice } from "@reduxjs/toolkit";
import { login } from "./apiMiddleware"; 

// Définissez la fonction loginAsync
export const loginAsync = (username, password) => async (dispatch) => {
  try {
    const data = await login(username, password); 
    dispatch(setToken(data.token)); 
    dispatch(setUser(data.user)); 
  } catch (error) {
    dispatch(logOut()); 
    console.error('Error logging in:', error);
  }
};


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    error: null
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      
    },
    setUser: (state, action) => { state.user = action.payload },
    logOut: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    }
  }
});


export const { setToken, setUser, logOut } = authSlice.actions;
export const selectToken = (state) => state.auth.token;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectError = (state) => state.auth.error;


export default authSlice.reducer;
