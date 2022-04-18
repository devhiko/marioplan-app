const initState = {
  authError: null,
  authSuccess: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('Login Error')
      return {
        ...state,
        authError: 'Login Failed'
      };
    case 'LOGIN_SUCCESS':
      console.log('Login success !')
      return {
        ...state,
        authSuccess: 'Login success'
      }
    default:
      return state;
  }
}

export default authReducer;