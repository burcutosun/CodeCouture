export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const setRoles = (roles) => ({
  type: "SET_ROLES",
  payload: roles,
});

export const setTheme = (theme) => ({
  type: "SET_THEME",
  payload: theme,
});

export const setLanguage = (language) => ({
  type: "SET_LANGUAGE",
  payload: language,
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
