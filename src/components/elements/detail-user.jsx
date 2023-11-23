/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../../assets/css/detail-menu.css";
import Profile from "../../assets/img/profile.svg";
import DetailImage from "../../assets/img/edit-hero.png";
import axiosInstance from "../../axiosConfig";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "./comment-section";

export default function DetailMenuPage() {
  const [detailMenu, setDetailMenu] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetailMenu = async () => {
      try {
        const response = await axiosInstance.get(`/recipe/${id}`);
        setDetailMenu(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching detail menu:", error);
      }
    };

    fetchDetailMenu();
  }, [id]);

  return (
    <>
      <section className="detail-pages">
        <div className="detailpage-hero">
          <div className="profile-detail">
            <img src={Profile} alt="profile picture" />
            <div className="desc-hero">
              <p className="name">Ayudia</p>
              <p className="recipes Bold">10 Recipes</p>
            </div>
          </div>
          <div className="hero-date">
            <p>21 February 2023</p>
            <p>20 Likes - 2 Comments</p>
          </div>
        </div>
        <div className="hero-imagedetail">
          {detailMenu && (
            <>
              <h1>{detailMenu.title}</h1>
              <img src={detailMenu.photo_recipes === null ? DetailImage : detailMenu.photo_recipes} alt="food image" />
            </>
          )}
        </div>
      </section>
      <section className="detail-ingredients">
        <div className="ingredients">
          <h3>Description : </h3>
          <p style={{ marginLeft: "20px" }}>{detailMenu && detailMenu.description}</p>
          <h3>Ingredients : </h3>
          <p style={{ marginLeft: "20px" }}>{detailMenu && detailMenu.ingredients}</p>
          <h3>Instructions : </h3>
          <p style={{ marginLeft: "20px" }}>{detailMenu && detailMenu.instructions}</p>
          <h3>Author : </h3>
          <p style={{ marginLeft: "20px" }}>{detailMenu && detailMenu.author}</p>
        </div>
      </section>
      <Comment />
    </>
  );
}
