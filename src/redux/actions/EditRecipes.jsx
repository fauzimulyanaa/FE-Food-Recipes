/* eslint-disable no-unused-vars */
import axios from "../../axiosConfig";
import Swal from "sweetalert2";

export const updateRecipe = (recipeId, formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_RECIPE_PENDING" });
    const result = await axios.patch(`/recipe/update-recipe/${recipeId}`, formData, {
      headers: {
        token: `${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    const updatedRecipe = result.data;

    dispatch({ type: "UPDATE_RECIPE_SUCCESS", payload: updatedRecipe });
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Data has been updated successfully!",
    });
    navigate("/profile");
  } catch (error) {
    dispatch({ type: "UPDATE_RECIPE_ERROR", payload: error.message });
  }
};
