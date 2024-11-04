export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const setLoginSuccess = (token) => ({
  type: "LOGIN_SUCCESS",
  payload: { token },
});

export const setLoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const setLogout = () => ({
  type: "LOGOUT",
});
