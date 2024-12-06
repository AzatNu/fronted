const initialState = {
    postAppaeals: [],
};

export const postAppealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POST_APPEALS":
            return { ...state, app: action.payload };
        default:
            return state;
    }
}