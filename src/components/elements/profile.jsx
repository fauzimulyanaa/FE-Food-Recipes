/* eslint-disable no-unused-vars */
import React from "react";
import ProfileImagae from "../../assets/img/profile.svg";
import "../../assets/css/profile.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function ProfileNav() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    Swal.fire({
      title: "Logout Successful",
      text: "You have been logged out.",
      icon: "success",
    });

    navigate("/");
  };

  const profilePictureUrl = localStorage.getItem("photo_user");
  const defaultProfilePictureUrl = ProfileImagae;
  const imageUrl = profilePictureUrl ? profilePictureUrl : defaultProfilePictureUrl;

  return (
    <div className="navbar-nav ms-auto">
      <div className="profile">
        <img src={imageUrl} alt="profile picture" className="rounded-circle" />
        <div className="desc ml-2">
          <Link to="/profile" style={{ textDecoration: "none", color: "#000" }}>
            <p className="name">{`${localStorage.getItem("name")}`}</p>
          </Link>
          <button type="button" className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
