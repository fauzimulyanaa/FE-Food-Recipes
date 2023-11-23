/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "../axiosConfig";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/css/edit-menu.css";

const EditRecipe = () => {
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState();
  const [category_id, setCategory] = useState({});
  const [form, setForm] = useState({
    title: "",
    description: "",
    instructions: "",
    ingredients: "",
    category_id: "",
    photo_recipes: "",
  });
  const navigate = useNavigate();
  const { recipeId } = useParams();

  useEffect(() => {
    axios
      .get(`/recipe/${recipeId}`, {
        headers: {
          token: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [recipeId]);

  useEffect(() => {
    axios
      .get("/category", {
        headers: {
          token: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("Category ", category_id);
  }, [category_id]);

  useEffect(() => {
    if (data) {
      setForm({
        title: data.title,
        description: data.description,
        instructions: data.instructions,
        ingredients: data.ingredients,
        category_id: data.category_id,
        photo_recipes: data.photo,
      });
    }
  }, [data]);

  const putData = () => {
    let bodyData = new FormData();
    bodyData.append("photo_recipes", photo);
    bodyData.append("title", form.title);
    bodyData.append("description", form.description);
    bodyData.append("instructions", form.instructions);
    bodyData.append("ingredients", form.ingredients);
    bodyData.append("category_id", form.category_id);

    axios
      .patch(`/recipe/update-recipe/${recipeId}`, bodyData, {
        headers: {
          token: `${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("Success: Data has been updated successfully!");
        console.log(res);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    putData();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onChangePhoto = (e) => {
    setPhoto(e.target.files[0]);
    e.target.files[0] && setForm({ ...form, photo: URL.createObjectURL(e.target.files[0]) });
  };
  return (
    <div className="edit-container">
      <h2 className="edit-tagline">Edit Recipe</h2>
      <form onSubmit={handleUpdate}>
        <div className="d-flex edit-photo align-items-center justify-content-center mb-4 ps-0">
          {form.photo && <img src={form.photo} alt="image food" className="rounded" />}
          <button className="btn btn-change">
            Change Photo
            <input type="file" className="background-primary" width="100%" height="100%" onChange={onChangePhoto} />
          </button>
        </div>
        <div className="title-form">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Title
            </span>
            <input type="text" className="form-control" placeholder="Recipes..." aria-label="Username" aria-describedby="basic-addon1" value={form.title} onChange={onChange} name="title" />
          </div>
        </div>
        <div className="Description-form">
          <div className="input-group">
            <span className="input-group-text">Description</span>
            <textarea className="text-form form-control" aria-label="With textarea" value={form.description} onChange={onChange} name="description"></textarea>
          </div>
        </div>
        <div className="instructions-form">
          <div className="input-group">
            <span className="input-group-text">Instructions</span>
            <textarea className="text-form form-control" aria-label="With textarea" value={form.instructions} onChange={onChange} name="instructions"></textarea>
          </div>
        </div>
        <div className="ingredients-form">
          <div className="input-group">
            <span className="input-group-text">Ingredients</span>
            <textarea className="text-form form-control" aria-label="With textarea" value={form.ingredients} onChange={onChange} name="ingredients"></textarea>
          </div>
        </div>

        <label>Category:</label>
        <select name="category_id" value={form.category_id} onChange={onChange}>
          {/* Pilihan kategori, sesuaikan dengan data kategori yang tersedia */}
          <option value="1">Main Course</option>
          <option value="2">Appetizer</option>
          <option value="3">Dessert</option>
        </select>

        <button type="submit" className="edit-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditRecipe;
