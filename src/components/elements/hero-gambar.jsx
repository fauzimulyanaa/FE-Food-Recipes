/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/app.css";

export default function HeroImage({ src, altText }) {
  return (
    <>
      <img src={src || "default-image-url"} alt={altText || "Default Alt Text"} className="img" />
    </>
  );
}
