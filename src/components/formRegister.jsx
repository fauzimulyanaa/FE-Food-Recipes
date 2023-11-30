/* eslint-disable no-unused-vars */
import CoverImage from "../assets/img/l.png";
import "../assets/css/formregister.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/AuthRegister";
import Swal from "sweetalert2";
import Loading from "./loading";

export default function Form() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.authRegister.isLoading);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (password !== confpassword) {
        Swal.fire({
          icon: "error",
          title: "Password Mismatch",
          text: "Password and confirm password do not match.",
        });
        return;
      }
      dispatch(
        register({
          username,
          email,
          password,
          confPassword: confpassword,
        })
      );
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Welcome, Please Login!",
      });
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <section className="container-fluid form-section">
      <div className="wrapper-register d-flex container-md">
        <div className="wrapper-img-formregister">
          <img src={CoverImage} alt="Cover book recipes" />
        </div>
        <div className="wrapper-form ">
          <h3>Let’s Get Started !</h3>
          <p>Create new account to access all features</p>
          <form className="mt-1" onSubmit={handleRegister}>
            <div className="form-input mb-3">
              <label htmlFor="username" className="my-lable">
                Name
              </label>
              <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-input mb-3">
              <label htmlFor="email" className="my-lable">
                Email
              </label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-input mb-3">
              <label htmlFor="password" className="my-lable">
                Password
              </label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="form-input mb-3">
              <label htmlFor="confpassword" className="my-lable">
                Confirm Password
              </label>
              <input type="password" className="form-control" id="confpassword" value={confpassword} onChange={(e) => setConfPassword(e.target.value)} />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I agree to terms & conditions
              </label>
            </div>
            <button type="submit" className="my-btn btn-warning text-white">
              Submit
            </button>
            <br />
            <p className="signup">
              Already have account?
              <Link to="/login" className="signup-link">
                Log in Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
