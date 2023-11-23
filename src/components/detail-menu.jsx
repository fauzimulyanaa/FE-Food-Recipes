/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./navbarwithprofile";
import DetailUser from "./elements/detail-user";
import Footer from "../components/footer";

export default function DetailMenu() {
  return (
    <>
      <div className="container-fluid">
        <Navbar nav1="Home" nav2="Add Recipe" nav3="Search Menu" link1="/" link2="/add-menu" link3="/search-menu" />
        <DetailUser />
      </div>
      <Footer />
    </>
  );
}
