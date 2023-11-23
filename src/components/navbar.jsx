/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ nav1, nav2, nav3, link1, link2, link3 }) {
  return (
    <>
      <header className="px-lg-5 py-xl-3">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="my-nav collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav gap-5">
                <Link to={link1} className="nav-item nav-link" style={{ color: "#2E266F", fontWeight: "500" }}>
                  {nav1}
                </Link>
                <Link to={link2} className="nav-item nav-link" style={{ color: "#2E266F", fontWeight: "500" }}>
                  {nav2}
                </Link>
                <Link to={link3} className="nav-item nav-link" style={{ color: "#2E266F", fontWeight: "500" }}>
                  {nav3}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
