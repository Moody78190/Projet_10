// authReducer.jsx

const initialState = {
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LOGIN_SUCCESS':
          return {
              ...state,
              token: action.payload.token,
              error: null,
          };
      case 'LOGIN_ERROR':
          return {
              ...state,
              error: action.payload.error,
          };
      case 'LOGOUT':
          return {
              ...state,
              token: null,
          };
      default:
          return state;
  }
};

export default authReducer; 