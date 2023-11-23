/* eslint-disable no-unused-vars */
import React from "react";
import "../../assets/css/searchpage.css";

export default function SearchWithButton() {
  return (
    <>
      <section className="section-search">
        <div className="search-hero">
          <h1 className="title-search">Discover Recipe & Delicious Food</h1>
          <div className="search-form">
            <input type="text" name="search" id="search" placeholder="Telur Gulung" />
            <button type="button" className="search-btn">
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
