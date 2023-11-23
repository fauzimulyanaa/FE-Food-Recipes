/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CoverImage from "../assets/img/l.png";
import "../assets/css/form.css";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../axiosConfig";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("name", response.data.data.username);
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("uuid", response.data.data.uuid);
      setData(response.data.data);
      setErrorMessage("");
      console.log("Response:", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);

      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <section className="container-fluid form-section">
      <div className="wrapper d-flex container-md">
        <div className="wrapper-img-form">
          <img src={CoverImage} alt="cover book recipes" />
        </div>
        <div className="wrapper-form">
          <h3>Welcome</h3>
          <p>Log in into your exiting account</p>
          <form className="mt-4" onSubmit={handleLogin}>
            <div className="form-input mb-3">
              <label htmlFor="email" className="my-lable">
                Email
              </label>
              <input type="email" className="form-control" placeholder="Enter email address" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-input mb-3">
              <label htmlFor="password" className="my-lable">
                Password
              </label>
              <input type="password" className="form-control" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I agree to terms & conditions
              </label>
            </div>
            <button type="submit" className="login-btn btn btn-warning text-white">
              Submit
            </button>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <br />
            <p className="signup">
              Don’t have an account?
              <Link to="/signup" className="signup-link">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
