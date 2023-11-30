/* eslint-disable no-unused-vars */

import SearchIcon from "../../assets/img/search.svg";
import "../../assets/css/app.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMenus } from "../../redux/actions/SearchRecipes";

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchMenus(searchTerm));
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="search">
        <h1 className="tagline-home">Discover Recipe & Delicious Food</h1>
        <div className="wrapper-search">
          <input type="text" placeholder="search restaurant, food" className="input-hero" value={searchTerm} onChange={handleChange} />
          <img src={SearchIcon} alt="search-icon" className="ic-search" />
          <button type="button" className="btn-search" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </>
  );
}
