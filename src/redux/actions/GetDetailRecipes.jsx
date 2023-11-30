import axios from "../../axiosConfig";

export const getDetailMenu = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MENU_PENDING" });
      const response = await axios.get(`/recipe/${id}`);
      dispatch({ payload: response.data.data, type: "GET_MENU_SUCCESS" });
    } catch (error) {
      dispatch({ type: "GET_MENU_ERROR", payload: error.message });
    }
  };
};
