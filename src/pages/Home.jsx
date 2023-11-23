/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero-utama";
import SubHero from "../components/hero-popular";
import SubHeroNew from "../components/hero-new";
import Cards from "../components/hero-grid";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <Navbar nav1="Register" nav2="Login" nav3="Search Menu" link1="/signup" link2="/login" link3="/search-menu" />
        <Hero />
        <SubHero />
        <SubHeroNew />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default Home;
