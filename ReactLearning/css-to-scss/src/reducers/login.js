const initState = {
  logindata: {},
};

const login = (state = initState, action) => {
  if (action.type === 'LOGOUT_USER') {
    return {
      ...state,
      logindata: '',
    };
  }
  if (action.type === 'LOGIN_USER') {
    return {
      ...state,
      logindata: action,
    };
  }
  return state;
};

export default login;
