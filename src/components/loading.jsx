/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "../assets/css/lodingSpinner.css";

const LoadingSpinner = ({ isLoading }) => {
  const spinnerAnimation = useSpring({
    opacity: isLoading ? 1 : 0,
    display: isLoading ? "flex" : "none",
    from: { opacity: 0 },
  });

  return (
    <animated.div style={spinnerAnimation} className="loading-spinner-container">
      <div className="loading-spinner"></div>
    </animated.div>
  );
};

export default LoadingSpinner;
