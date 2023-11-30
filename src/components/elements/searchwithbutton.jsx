/* eslint-disable no-unused-vars */

import "../../assets/css/searchpage.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMenus } from "../../redux/actions/SearchRecipes";

export default function SearchWithButton() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchMenus(searchTerm));
  };
  return (
    <>
      <section className="section-search">
        <div className="search-hero">
          <h1 className="title-search">Discover Recipe & Delicious Food</h1>
          <div className="search-form">
            <input type="text" name="search" id="search" placeholder="Telur Gulung" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button type="button" className="search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="btn-cta">
            <button type="button" className="new">
              New
            </button>
            <button type="menu" className="popular">
              Popular
            </button>
            <button type="button" className="vegetarian">
              Vegetarian
            </button>
            <button type="button" className="breakfast">
              Breakfast
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
