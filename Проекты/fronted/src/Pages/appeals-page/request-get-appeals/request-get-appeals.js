import axios from "axios";
export const requestGetAppeals = () => async (dispatch) => {
    try {
        const { data } = await axios.get("http://localhost:3005/appeals");
        dispatch({ type: "GET_APPEALS__SUCCESS", payload: data });
    } catch (err) {
        dispatch({ type: "GET_APPEALS__FAILED", payload: err });
    }
    
}

