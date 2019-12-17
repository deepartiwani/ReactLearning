const loginAction = (userdata) => {
  console.log("userdata === ",userdata);
  
  return ({
  type: 'LOGIN_USER',
  userdata,
})};

export default loginAction;
