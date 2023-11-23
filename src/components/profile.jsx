/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarProfile from "../components/navbarwithprofile";
import CardImage from "../components/elements/card-image";
import CardTitle from "../components/elements/card-title";
import Profile from "../assets/img/profile.svg";
import axios from "../axiosConfig";
import "../assets/css/profile-page.css";

const ProfilePage = () => {
  const [userRecipes, setUserRecipes] = useState([]);
  const userId = localStorage.getItem("uuid");

  useEffect(() => {
    const fetchUserRecipes = async () => {
      try {
        if (userId) {
          const response = await axios.get("/recipe/my-recipe");
          setUserRecipes(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching user recipes:", error);
      }
    };

    fetchUserRecipes();
  }, [userId]);

  const confirmDelete = async (recipeId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this recipe?");
    if (isConfirmed) {
      try {
        await axios.delete(`/recipe/delete-recipe/${recipeId}`, {
          headers: {
            token: `${localStorage.getItem("token")}`,
          },
        });

        // Remove the deleted recipe from the state
        setUserRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== recipeId));
        console.log("Recipe deleted successfully!");
      } catch (error) {
        console.error("Error deleting recipe:", error);
      }
    }
  };

  const handleEdit = (recipeId) => {
    history.push(`/edit-recipe/${recipeId}`);
  };

  return (
    <>
      <div className="container-fluid">
        <NavbarProfile nav1="Home" nav2="Add Recipes " nav3="Search Menu" link1="/" link2="/add-menu" link3="/search-menu" />
        <div className="detailpage-profile">
          <div className="profile-detail">
            <img src={Profile} alt="profile picture" />
            <div className="desc-hero">
              <p className="name">{`${localStorage.getItem("name")}`}</p>
              <p className="recipes Bold">{userRecipes.length} Recipes</p>
            </div>
          </div>
          <div className="hero-date">
            <p>21 February 2023</p>
            <p>20 Likes - 2 Comments</p>
          </div>
        </div>
        <section className="section-search">
          <div className="wrapper-searchpage">
            {userRecipes.map((recipe) => (
              <div key={recipe.id} className="search-card mb-3" style={{ maxWidth: "990px" }}>
                <CardImage CardImage={recipe.photo_recipes} />
                <div className="my-row g-0">
                  <CardTitle CardTitle={recipe.title} CardIngredients={recipe.category} Author={recipe.author} />
                  <Link to={`/edit-recipe/${recipe.id}`} className="btn-edit btn-primary mx-2" onClick={() => handleEdit(recipe.id)}>
                    Edit Menu
                  </Link>
                  <button className="btn-delete btn-danger mx-2" onClick={() => confirmDelete(recipe.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProfilePage;
