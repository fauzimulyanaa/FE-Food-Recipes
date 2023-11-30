/* eslint-disable no-unused-vars */
import React from "react";
import "../assets/css/add-menu.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addMenu } from "../redux/actions/AddRecipes";
import Loading from "./loading";
import Swal from "sweetalert2";

export default function AddMenu() {
  const dispatch = useDispatch();
  const AddRecipes = useSelector((state) => state.addRecipes);
  const isLoading = useSelector((state) => state.isLoading);
  const navigate = useNavigate();
  const [photo, setPhoto] = useState();
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    instructions: "",
    ingredients: "",
    category_id: "1",
    photo_recipes: "",
  });

  const handleAddMenu = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Posting Recipes",
      html: "Please wait...",
      allowOutsideClick: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    let bodyData = new FormData();
    bodyData.append("title", inputData.title);
    bodyData.append("description", inputData.description);
    bodyData.append("instructions", inputData.instructions);
    bodyData.append("ingredients", inputData.ingredients);
    bodyData.append("category_id", inputData.category_id);
    bodyData.append("photo_recipes", photo);

    dispatch(addMenu(bodyData, navigate));
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log("input", e.target.name, e.target.value);
    console.log(inputData);
  };

  const onChangePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
    e.target.files[0] && setInputData({ ...inputData, photo_recipes: URL.createObjectURL(e.target.files[0]) });
  };

  return (
    <>
      <section>
        <div className="add-file">
          <form onSubmit={handleAddMenu}>
            <div className="add-photo">
              <div className="input-group mb-3">
                <input type="file" className="form-control" id="inputGroupFile02" onChange={onChangePhoto} />
                <label className="input-group-text" htmlFor="inputGroupFile02">
                  Upload Image
                </label>
              </div>
            </div>
            <div className="title-form">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Title
                </span>
                <input type="text" className="form-control" placeholder="Recipes..." aria-label="Username" aria-describedby="basic-addon1" onChange={onChange} name="title" />
              </div>
            </div>
            <div className="Description-form">
              <div className="input-group">
                <span className="input-group-text">Description</span>
                <textarea className="form-control" aria-label="With textarea" onChange={onChange} name="description"></textarea>
              </div>
            </div>
            <div className="instructions-form">
              <div className="input-group">
                <span className="input-group-text">Instructions</span>
                <textarea className="form-control" aria-label="With textarea" onChange={onChange} name="instructions"></textarea>
              </div>
            </div>
            <div className="ingredients-form">
              <div className="input-group">
                <span className="input-group-text">Ingredients</span>
                <textarea className="form-control" aria-label="With textarea" onChange={onChange} name="ingredients"></textarea>
              </div>
            </div>
            <div className="category-form">
              <div className="input-group">
                <label className="input-group-text" htmlFor="inputGroupSelect01">
                  Category
                </label>
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">Main Course</option>
                  <option value="2">Appetizer</option>
                  <option value="3">Dessert</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-submit">
              Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
