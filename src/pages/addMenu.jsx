/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Navbar from "../components/navbarwithprofile";
import AddMenu from "../components/add-menu";
import Footer from "../components/footer";

export default function AddMenuPage() {
  return (
    <>
      <div className="container-fluid">
        <Navbar nav1="Home" nav2="Add Recipe" nav3="Profile" link1="/" link2="/add-menu" link3="/profile" />
        <AddMenu />
      </div>
      <Footer />
    </>
  );
}
