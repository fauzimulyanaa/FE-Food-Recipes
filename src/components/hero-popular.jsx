/* eslint-disable no-unused-vars */
import React from "react";
import HeroImage from "./elements/hero-gambar";
import TitleSubHero from "./elements/TitleSubHero";
import Tagline from "./elements/tagline";
import ImageHero from "../assets/img/img-1.png";
import "../assets/css/app.css";

export default function SubHeroForYou() {
  return (
    <>
      <div className="popular-for-you">
        <Tagline tagline="Popular For You!" />
        <div className="sub-hero d-flex align-items-center justify-content-between">
          <div className="wrapperimg-sub">
            <HeroImage src={ImageHero} alt="Delicious Food" />
          </div>
          <TitleSubHero />
        </div>
      </div>
    </>
  );
}
