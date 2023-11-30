import axios from "../../axiosConfig";

export const GET_MENU_SUCCESS = "GET_MENU_SUCCESS";
export const GET_MENU_ERROR = "GET_MENU_ERROR";

export const getAllMenus = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_MENU_PENDING" });
    const response = await axios.get("/recipe");
    console.log(response);
    dispatch({ payload: response.data, type: GET_MENU_SUCCESS });
  } catch (error) {
    dispatch({ type: GET_MENU_ERROR, payload: error.message });
  }
};
