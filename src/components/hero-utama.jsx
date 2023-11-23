/* eslint-disable no-unused-vars */
import React from "react";
import Seacrh from "./elements/search-form";
import HeroImage from "./elements/hero-gambar";
import "../assets/css/app.css";
import ImageHero from "../assets/img/hero.png";

export default function MainHero() {
  return (
    <>
      <div className="hero d-flex align-items-center justify-content-between ">
        <Seacrh />
        <div className="wrapper-img">
          <HeroImage src={ImageHero} altText="Delicious Food" />
        </div>
      </div>
    </>
  );
}
