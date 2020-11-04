const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log("You've logged IN successfully");
      return {
        ...state,
        authError: null,
      };
    case 'LOGOUT_SUCCESS':
      console.log("You've logged OUT successfully");
      return {
        ...state,
        authError: null,
      };
    case 'SIGNUP_SUCCESS':
      console.log("You've sing UP successfully");
      return {
        ...state,
        authError: null,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: action.error.message,
      };
    case 'LOGOUT_ERROR':
      return {
        ...state,
        authError: action.error.message,
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.error.message,
      };
    default:
      return state;
  }
};

export default authReducer;
