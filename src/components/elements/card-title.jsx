/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import AuthorImage from "../../assets/img/author.svg";
import "../../assets/css/searchpage.css";

export default function ImagageSearch({ CardTitle, Author, CardIngredients }) {
  return (
    <>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{CardTitle}</h5>
          <p className="card-text">Category : {CardIngredients}</p>
          <button type="button" className="btn btn-comment">
            10 Likes - 12 Comment - 3 Bookmark
          </button>
          <br />
          <div className="profile-card">
            <img src={AuthorImage} alt="profile image" />
            <p>{Author}</p>
          </div>
        </div>
      </div>
    </>
  );
}
