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
import EditProfile from "./pages/EditProfile";
import Auth from "./components/authMiddleware";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/search-menu"
          element={
            <Auth>
              <Search />
            </Auth>
          }
        />
        <Route path="/detail-menu/:id" element={<DetailMenu />} />
        <Route path="/add-menu" element={<AddMenu />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-recipe/:id" element={<EditRecipe />} />
        <Route path="/edit-profile/:userId" element={<EditProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
