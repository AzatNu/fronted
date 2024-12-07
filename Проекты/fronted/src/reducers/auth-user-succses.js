const initialState = {
    authUserSuccses: [],
};

export const authUserSuccses = (state = initialState, action) => {
    switch (action.type) {
        case "AUTH_USER__SUCCESS":
            return {
                ...state,
                authUserSuccses: action.payload,
            };
        default:
            return state;   
        }

}