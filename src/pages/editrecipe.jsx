/* eslint-disable no-unused-vars */
import React from "react";
import EditPage from "../components/edit-page";
import Navbar from "../components/navbarwithprofile";
import Footer from "../components/footer";

export default function SearchPage() {
  return (
    <>
      <div className="container-fluid">
        <Navbar nav1="Home" nav2="Add Recipe" nav3="Profile" link1="/" link2="/add-menu" link3="/profile" />
        <EditPage />
      </div>
      <Footer />
    </>
  );
}
