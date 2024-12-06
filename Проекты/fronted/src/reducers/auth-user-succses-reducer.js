const initialState = {
    authUserSuccses: [],
};

export const authUserSuccsesReducer = (state = initialState, action) => {
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