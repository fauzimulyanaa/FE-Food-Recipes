/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import NavbarProfile from "./navbarwithprofile";
import SearchForm from "./elements/searchwithbutton";
import CardImage from "./elements/card-image";
import CardTitle from "./elements/card-title";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllMenus } from "../redux/actions/GetRecipes";
import Loding from "../components/loading";
function Menu() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.menus.isLoading);
  const menus = useSelector((state) => state.menus.data);
  const searchTerm = useSelector((state) => state.seacrhRecipes.searchTerm);

  useEffect(() => {
    dispatch(getAllMenus());
  }, [dispatch]);
  const menuData = menus?.data || [];

  console.log("menuData:", menuData);
  console.log("searchTerm:", searchTerm);

  const filteredMenus = searchTerm ? menuData.filter((menu) => menu.title.toLowerCase().includes(searchTerm.toLowerCase())) : menuData;

  console.log("filteredMenus:", filteredMenus);

  return (
    <section className="section-search">
      <div className="wrapper-searchpage">
        <Loding isLoading={isLoading} />
        {filteredMenus.length > 0 ? (
          filteredMenus.map((menu) => (
            <div key={menu.id} className="search-card mb-3" style={{ maxWidth: "990px" }}>
              <CardImage CardImage={menu.photo_recipes} />
              <div className="my-row g-0">
                <CardTitle CardTitle={menu.title} CardIngredients={menu.category} Author={menu.author} />
                <Link to={`/detail-menu/${menu.id}`} className="btn-detail btn-primary">
                  Detail
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No matching recipes found.</p>
        )}
      </div>
      <nav aria-label="Page navigation example" style={{ marginTop: "40px" }}>
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link">Previous</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default function NavProfile() {
  return (
    <>
      <div className="container-fluid">
        <NavbarProfile nav1="Register" nav2="Login" nav3="Search Menu" link1="/signup" link2="/login" />
        <SearchForm />
        <Menu />
      </div>
    </>
  );
}
