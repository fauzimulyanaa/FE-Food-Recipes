/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Image from "../../assets/img/dummy.png";
import "../../assets/css/searchpage.css";

export default function ImagageSearch({ CardImage }) {
  return (
    <>
      <div className="gambar col-md-4">
        <img src={CardImage ? CardImage : Image} className="img-fluid rounded-start" alt="Food Image" />
      </div>
    </>
  );
}
