// authActions.js

import axios from "../../axiosConfig";
import Swal from "sweetalert2";

export const login = (userData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "AUTH_LOGIN_PENDING" });

    const response = await axios.post("/auth/login", userData);
    localStorage.setItem("name", response.data.data.username);
    localStorage.setItem("token", response.data.data.token);
    localStorage.setItem("uuid", response.data.data.uuid);

    dispatch({
      type: "AUTH_LOGIN_SUCCESS",
      payload: response.data.data,
    });

    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "Welcome back!",
    });
    navigate("/profile");
  } catch (error) {
    dispatch({
      type: "AUTH_LOGIN_ERROR",
      payload: error.message,
    });

    console.error("Error during login:", error);

    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: "Invalid email or password. Please try again.",
    });
  }
};
