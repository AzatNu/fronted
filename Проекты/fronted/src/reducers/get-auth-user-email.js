const initialState = {
    getAuthUserEmail: [],
}

export const getAuthUserEmailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_AUTH_USER__EMAIL":
            return {
                ...state,
                getAuthUserEmail: action.payload    
            };
        default:
            return state;         
        }
    }