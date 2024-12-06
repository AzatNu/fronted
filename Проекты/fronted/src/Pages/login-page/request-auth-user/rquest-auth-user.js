export const requestAuthUser = (data) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3005/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    if (!response.ok) {
      dispatch({ type: "AUTH_USER__FAILED", payload: result });
    } else {
      dispatch({ type: "AUTH_USER__FAILED", payload: [] });
      dispatch({ type: "AUTH_USER__SUCCESS", payload: result });
      dispatch({ type: "GET_AUTH_USER__EMAIL", payload: result.email });
      return;
    }
  } catch (error) {
    dispatch({ type: "AUTH_USER__FAILED", payload: error });
  }
};

