/* eslint-disable no-unused-vars */
import CoverImage from "../assets/img/l.png";
import "../assets/css/formregister.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "../axiosConfig";
import { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (password !== confpassword) {
        console.error("Password and confirm password do not match.");
        return;
      }
      const response = await axios.post("/auth/register", {
        username,
        email,
        password,
        confPassword: confpassword,
      });

      setRegistrationSuccess(true);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error during registration:", error);
      if (error.response) {
        // Kesalahan respons dari server
        console.error("Response Error:", error.response.data);
        console.error("Status Code:", error.response.status);
      } else if (error.request) {
        // Tidak ada respons dari server
        console.error("No Response Received");
      } else {
        // Kesalahan lainnya
        console.error("Error:", error.message);
      }
    }
  };
  const closeModal = () => {
    setRegistrationSuccess(false);
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
          <div className={`modal fade ${registrationSuccess ? "show" : ""}`} style={{ display: registrationSuccess ? "block" : "none" }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Register Success</h5>
                  <button type="button" className="close" onClick={closeModal} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Please log in to continue.</p>
                </div>
                <div className="modal-footer d-flex">
                  <button type="button" className="form-btn " onClick={closeModal}>
                    Close
                  </button>
                  <button type="button" className="form-btn ">
                    <Link to="/login" className="signup-link">
                      Log in Here
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
