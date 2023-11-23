/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/app.css";

export default function Card({ cardImage, cardTitle, FoodTitle }) {
  return (
    <div className="col">
      <div className="my-card">
        <img src={cardImage} alt="Delicious Food" style={{ width: "300px" }} />
        <div className={FoodTitle}>
          <p className="text-start">{cardTitle}</p>
        </div>
      </div>
    </div>
  );
}
