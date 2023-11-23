/* eslint-disable no-unused-vars */
import React from "react";
import SearchIcon from "../../assets/img/search.svg";
import "../../assets/css/app.css";

export default function SearchForm() {
  return (
    <>
      <div className="search">
        <h1 className="tagline-home">Discover Recipe & Delicious Food</h1>
        <div className="wrapper-search">
          <input type="text" placeholder="search restaurant, food" className="input-hero" />
          <img src={SearchIcon} alt="search-icon" className="ic-search" />
        </div>
      </div>
    </>
  );
}
