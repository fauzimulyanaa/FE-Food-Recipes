/* eslint-disable no-unused-vars */
import React from "react";
import ProfileImagae from "../../assets/img/profile.svg";
import "../../assets/css/profile.css";

export default function ProfileNav() {
  return (
    <div className="navbar-nav ms-auto">
      <div className="profile">
        <img src={ProfileImagae} alt="profile picture" className="rounded-circle" />
        <div className="desc ml-2">
          <p className="name">{`${localStorage.getItem("name")}`}</p>
          <a href="#" className="logout">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}
