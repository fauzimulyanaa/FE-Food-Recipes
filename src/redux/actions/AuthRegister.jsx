import axios from "../../axiosConfig";

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "AUTH_REGISTER_PENDING" });

    const response = await axios.post("/auth/register", userData);

    dispatch({
      type: "AUTH_REGISTER_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "AUTH_REGISTER_ERROR",
      payload: error.message,
    });
  }
};
