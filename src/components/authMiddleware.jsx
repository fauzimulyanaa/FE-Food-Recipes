/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Auth = ({ children }) => {
  const authData = useSelector((state) => state.authLogin.data);

  if (!authData) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Auth;
