const initialState = {
    authUserFlag:"",
};

export const authUserFlag = (state = initialState, action = {}) => {
    switch (action.type) {
        case "AUTH_USER__FLAG":
            return {
                ...state,
                authUserFlag: action.payload,
            };
        default:
            return state;
    }
};

