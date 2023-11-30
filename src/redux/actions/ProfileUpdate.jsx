// profileActions.js

import axios from "../../axiosConfig";

export const updateProfile = (uuid, formData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PROFILE_PENDING" });

    const response = await axios.patch(`/user/update-user/${uuid}`, formData, {
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
    });

    dispatch({
      type: "UPDATE_PROFILE_SUCCESS",
      payload: response.data.data,
    });

    return response.data.data;
  } catch (error) {
    dispatch({
      type: "UPDATE_PROFILE_FAILURE",
      payload: error.message,
    });

    throw error;
  }
};
