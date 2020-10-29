const initState = {
  authError: null,
  logoutError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log("You've logged successfully");
      return {
        ...state,
        authError: null,
      };
    case 'LOGOUT_SUCCESS':
      console.log("You've logged out successfully");
      return {
        ...state,
        logoutError: null,
      };
    case 'LOGIN_ERROR':
      console.log(action.error);
      return {
        ...state,
        authError: 'Login failed',
      };
    case 'LOGOUT_ERROR':
      console.log(action.error);
      return {
        ...state,
        logoutError: 'Log out failed',
      };
    default:
      return state;
  }
};

export default authReducer;
