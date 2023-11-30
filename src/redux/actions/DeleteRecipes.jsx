import axios from "../../axiosConfig";
import Swal from "sweetalert2";

export const deleteRecipe = (recipeId) => async (dispatch) => {
  dispatch({ type: "DELETE_RECIPE_PENDING" });
  try {
    await axios.delete(`/recipe/delete-recipe/${recipeId}`, {
      headers: {
        token: `${localStorage.getItem("token")}`,
      },
    });

    dispatch({ type: "DELETE_RECIPE_SUCCESS", payload: recipeId });

    Swal.fire("Deleted!", "Your recipe has been deleted.", "success");
  } catch (error) {
    console.error("Error deleting recipe:", error);
    Swal.fire("Error", "An error occurred while deleting the recipe.", "error");
  }
};
