import axios from "../../axiosConfig";

export const getUserRecipes = () => async (dispatch) => {
  dispatch({ type: "FETCH_USER_RECIPES_PENDING" });
  try {
    const userId = localStorage.getItem("uuid");

    if (userId) {
      const response = await axios.get("/recipe/my-recipe");
      console.log(response);
      console.log("API Response:", response.data);
      dispatch({ type: "FETCH_USER_RECIPES_SUCCESS", payload: response.data.data });
    }
  } catch (error) {
    dispatch({ type: "FETCH_USER_RECIPES_ERROR", payload: error.message });
  }
};
