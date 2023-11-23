/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "../../assets/css/app.css";

export default function Tagline({ tagline }) {
  return (
    <>
      <div className="popular-tagline">
        <div className="tiang"></div>
        <h2 className="tagline-name">{tagline}</h2>
      </div>
    </>
  );
}
