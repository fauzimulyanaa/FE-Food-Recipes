import axios from "../../axiosConfig";

export const getCategory = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_CATEGORY_PENDING" });
    const response = await axios.get("/category", {
      headers: {
        token: `${localStorage.getItem("token")}`,
      },
    });
    dispatch({ payload: response.data.data, type: "GET_CATEGORY_SUCCESS" });
  } catch (err) {
    dispatch({ payload: err.message, type: "GET_CATEGORY_ERROR" });
  }
};
