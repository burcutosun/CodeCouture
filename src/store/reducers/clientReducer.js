const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  isAuthenticated: false,
  token: null,
  error: null,
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default clientReducer;
