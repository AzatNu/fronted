const initialState = {
  authUserFailed: [],
};

export const authUserFailedReducer = (state = initialState, action) => {
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


