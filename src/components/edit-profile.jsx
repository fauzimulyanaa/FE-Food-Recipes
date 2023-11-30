/* eslint-disable no-unused-vars */
import Navbar from "../components/navbarwithprofile";
import "../assets/css/edit-profile.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/actions/ProfileUpdate";
import axios from "../axiosConfig";
import Swal from "sweetalert2";
import Loading from "../components/loading";

export default function EditProfile() {
  const userUpdate = useSelector((state) => state.profileUpdate.user);
  const dispatch = useDispatch();
  const uuid = localStorage.getItem("uuid");

  const isLoading = useSelector((state) => state.profileUpdate.isLoading);
  const isSuccess = useSelector((state) => state.profileUpdate.isSuccess);
  const errorMessage = useSelector((state) => state.profileUpdate.errorMessage);

  const [user, setUser] = useState({});
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const navigate = useNavigate();

  const getDetailUser = async () => {
    try {
      const response = await axios.get(`/user/${uuid}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setUser(response.data.data);
    } catch (error) {
      console.error("Error getting user data:", error);
    }
  };

  useEffect(() => {
    getDetailUser();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const formDataForRequest = new FormData();
      formDataForRequest.append("email", formData.email);
      if (formData.username) {
        formDataForRequest.append("username", formData.username);
      }
      if (photo) {
        formDataForRequest.append("photo_user", photo);
      }
      Swal.fire({
        title: "Updating Profile...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        onOpen: () => {
          Swal.showLoading();
        },
      });

      await dispatch(updateProfile(uuid, formDataForRequest));

      if (isSuccess) {
        if (formData.username) {
          localStorage.setItem("name", formData.username);
        }
        if (photo) {
          localStorage.setItem("photo_user", userUpdate.photo_user || "");
        }
        Swal.fire({
          icon: "success",
          title: "Profile Updated!",
          text: "Your profile has been successfully updated.",
        }).then(() => {
          window.history.back();
        });
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const onChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };
  const onChangePhoto = (e) => {
    setPhoto(e.target.files[0]);
    e.target.files[0] &&
      setFormData((prevFormData) => ({
        ...prevFormData,
        photo_user: e.target.files[0],
      }));
  };

  return (
    <div className="container-fluid">
      <Navbar nav1="Home" nav2="Add Recipe" nav3="Search Menu" link1="/" link2="/add-menu" link3="/search-menu" />
      <section>
        <div className="wrapper-edit-form">
          <form className="mt-4" onSubmit={handleFormSubmit}>
            <div className="mb-3">
              {formData.photo && <img src={formData.photo} className="d-block img-user mx-auto rounded-circle object-fit-cover" width="250" height="250" />}
              <div className="d-flex justify-content-center mb-3">
                <button className="btn-change-photo-profile fw-medium color-blue">
                  <input type="file" className="background-primary" width="100%" height="100%" onChange={onChangePhoto} />
                </button>
              </div>
            </div>
            <div className="form-input mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input type="text" className="form-control" placeholder="Recipes..." aria-label="Username" aria-describedby="basic-addon1" value={formData.username} onChange={onChange} name="username" />
            </div>
            <div className="form-input mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" placeholder="Ayudia@gmail.com" id="email" aria-describedby="emailHelp" value={formData.email} onChange={onChange} />
            </div>
            <button type="submit" className="edit-btn btn btn-warning text-white">
              Submit
            </button>
            <br />
            <p className="forgot">
              Change Password?
              <a href="forgot-pass.html" className="forgot-link">
                Click Here
              </a>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
