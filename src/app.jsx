/* eslint-disable no-unused-vars */

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/login";
import SignUpForm from "./pages/register";
import Home from "./pages/Home";
import Search from "./pages/searchmenu";
import DetailMenu from "./pages/detailMenu";
import AddMenu from "./pages/addMenu";
import ProfilePage from "./pages/profilePage";
import EditRecipe from "./pages/editrecipe";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/search-menu" element={<Search />} />
        <Route path="/detail-menu/:id" element={<DetailMenu />} />
        <Route path="/add-menu" element={<AddMenu />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-recipe/:recipeId" element={<EditRecipe />} />
      </Routes>
    </Router>
  );
};

export default App;
