/* eslint-disable no-unused-vars */
import React from "react";
import HeroImage from "./elements/hero-gambar";
import TitleSubHero from "./elements/TitleSubHero";
import Tagline from "./elements/tagline";
import ImageHero from "../assets/img/img-2.png";
import "../assets/css/app.css";

export default function SubHeroNew() {
  return (
    <>
      <div className="popular-for-you">
        <Tagline tagline="New Recipe" />
        <div className="sub-hero d-flex align-items-center justify-content-between">
          <div className="wrapperimg-new">
            <HeroImage src={ImageHero} altText="Delicious Food" />
          </div>
          <TitleSubHero />
        </div>
      </div>
    </>
  );
}
