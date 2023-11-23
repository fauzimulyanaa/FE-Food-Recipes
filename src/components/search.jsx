/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import NavbarProfile from "./navbarwithprofile";
import SearchForm from "./elements/searchwithbutton";
import CardImage from "./elements/card-image";
import CardTitle from "./elements/card-title";
import axios from "../axiosConfig";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const getAllMenu = async () => {
  try {
    const response = await axios.get("/recipe");

    if (Array.isArray(response.data.data)) {
      return response.data.data;
    } else {
      console.error("Error: Response data is not an array.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching menus:", error);
    throw error;
  }
};

const SearchMenuPages = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const allMenus = await getAllMenu();
        setMenus(allMenus);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };
    fetchMenu();
  }, []);

  return (
    <section className="section-search">
      <div className="wrapper-searchpage">
        {menus.map((menu) => (
          <div key={menu.id} className="search-card mb-3" style={{ maxWidth: "990px" }}>
            <CardImage CardImage={menu.photo_recipes} />
            <div className="my-row g-0">
              <CardTitle CardTitle={menu.title} CardIngredients={menu.category} Author={menu.author} />
              <Link to={`/detail-menu/${menu.id}`} className="btn-detail  btn-primary">
                Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function NavProfile() {
  return (
    <>
      <div className="container-fluid">
        <NavbarProfile nav1="Register" nav2="Login" nav3="Search Menu" link1="/signup" link2="/login" />
        <SearchForm />
        <SearchMenuPages />
      </div>
    </>
  );
}
