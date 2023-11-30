import axios from "../../axiosConfig";
import Swal from "sweetalert2";

export const addMenu = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "POST_MENU_PENDING" });
    const result = await axios.post("/recipe/create", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch({ payload: result.data.data, type: "POST_MENU_SUCCESS" });
    Swal.fire({
      icon: "success",
      title: "Add Recipes",
      text: "Your recipe has been successfully added.",
    });
    navigate("/profile");
  } catch (err) {
    dispatch({ payload: err.message, type: "POST_MENU_ERROR" });
  }
};
