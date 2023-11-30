import { combineReducers } from "redux";
import menuReducer from "./GetRecipes";
import detailMenuReducer from "./GetDetailRecipes";
import editMenuReducer from "./EditRecipes";
import GetCategoryReducer from "./GetCategory";
import userRecipeReducer from "./GetMyRecipes";
import addRecipesReducer from "./AddRecipes";
import deleteRecipesReducer from "./DeleteRecipes";
import seacrhRecipesReducer from "./SearchRecipes";
import authRegisterReducer from "./AuthRegister";
import authLoginReducer from "./AuthLogin";
import profileUpdateReducer from "./ProfileUpdate";

const rootReducers = combineReducers({
  menus: menuReducer,
  detailMenu: detailMenuReducer,
  editRecipe: editMenuReducer,
  categories: GetCategoryReducer,
  userRecipes: userRecipeReducer,
  addRecipes: addRecipesReducer,
  deleteRecipes: deleteRecipesReducer,
  seacrhRecipes: seacrhRecipesReducer,
  authRegister: authRegisterReducer,
  authLogin: authLoginReducer,
  profileUpdate: profileUpdateReducer,
});

export default rootReducers;
