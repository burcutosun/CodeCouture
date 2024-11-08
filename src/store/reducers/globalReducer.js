const initialState = {
  categories: [],
  language: "",
  roles: [],
  theme: "",
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case "SET_ROLES":
      return { ...state, roles: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
  }
};
