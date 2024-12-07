const initialState = {
  authUserFailed: [],
};

export const authUserFailed = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_USER__FAILED":
      return {
        ...state,
        authUserFailed: action.payload,
      };
    default:
      return state;
  }
};


