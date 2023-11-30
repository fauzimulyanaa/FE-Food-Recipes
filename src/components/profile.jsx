/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarProfile from "../components/navbarwithprofile";
import CardImage from "../components/elements/card-image";
import CardTitle from "../components/elements/card-title";
import Profile from "../assets/img/profile.svg";
import "../assets/css/profile-page.css";
import Swal from "sweetalert2";
import { getUserRecipes } from "../redux/actions/GetUserRecipes";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipe } from "../redux/actions/DeleteRecipes";
import Loding from "../components/loading";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const userRecipes = useSelector((state) => state.userRecipes.data || []);
  const isLoading = useSelector((state) => state.userRecipes.isLoading);

  useEffect(() => {
    dispatch(getUserRecipes());
  }, [dispatch]);

  const confirmDelete = async (recipeId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      dispatch(deleteRecipe(recipeId));
    }
  };

  const handleEdit = (recipeId) => {
    history.push(`/edit-recipe/${recipeId}`);
  };
  const profilePictureUrl = localStorage.getItem("photo_user");
  const defaultProfilePictureUrl = Profile;
  const imageUrl = profilePictureUrl ? profilePictureUrl : defaultProfilePictureUrl;
  return (
    <>
      <div className="container-fluid">
        <NavbarProfile nav1="Home" nav2="Add Recipes " nav3="Search Menu" link1="/" link2="/add-menu" link3="/search-menu" />
        <div className="detailpage-profile">
          <div className="profile-detail">
            <img src={imageUrl} alt="profile picture" />
            <div className="desc-hero">
              <Link to={`/edit-profile/${localStorage.getItem("uuid")}`} style={{ textDecoration: "none", color: "#000" }}>
                <p className="name">{`${localStorage.getItem("name")}`}</p>
              </Link>
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
            <Loding isLoading={isLoading} />
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
