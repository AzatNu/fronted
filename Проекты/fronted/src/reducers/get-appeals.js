
const initialState = {
  appeals: [],
};

export const getAppealsSucsses = (state = initialState, action) => {
  switch (action.type) {
    case "GET_APPEALS__SUCCESS":
      return { ...state, appeals: action.payload };
    default:
      return state;
  }
};
