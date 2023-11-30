import axios from "../../axiosConfig";

export const GET_ALL_MENUS_REQUEST = "GET_ALL_MENUS_REQUEST";
export const GET_ALL_MENUS_SUCCESS = "GET_ALL_MENUS_SUCCESS";
export const GET_ALL_MENUS_FAILURE = "GET_ALL_MENUS_FAILURE";

export const SEARCH_MENUS_REQUEST = "SEARCH_MENUS_REQUEST";
export const SEARCH_MENUS_SUCCESS = "SEARCH_MENUS_SUCCESS";
export const SEARCH_MENUS_FAILURE = "SEARCH_MENUS_FAILURE";

export const getAllMenus = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_MENUS_REQUEST });

    const response = await axios.get("/recipe");
    const data = response.data;

    dispatch({
      type: GET_ALL_MENUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_MENUS_FAILURE,
      payload: error.message,
    });
  }
};

export const searchMenus = (searchTerm) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_MENUS_REQUEST });
    console.log("Search Term:", searchTerm);

    const response = await axios.get(`/recipe/detail?search=${searchTerm}&searchBy=title`);
    const data = response.data.data;

    console.log("Search Response:", data);

    dispatch({
      type: SEARCH_MENUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_MENUS_FAILURE,
      payload: error.message,
    });
  }
};
