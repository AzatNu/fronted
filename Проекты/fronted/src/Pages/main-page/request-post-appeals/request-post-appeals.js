import axios from "axios";
export const requestPostAppeals = (appeal) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:3005/appeals", appeal, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "POST_APPEALS", payload: data });
  } catch (err) {
    dispatch({ type: "POST_APPEALS__FAILED", payload: err });
  }
};
