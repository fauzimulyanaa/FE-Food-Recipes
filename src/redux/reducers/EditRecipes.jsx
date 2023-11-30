const initialState = {
  data: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: "",
};

const EditRecipes = (state = initialState, action) => {
  if (action.type === "UPDATE_RECIPE_PENDING") {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  } else if (action.type === "UPDATE_RECIPE_SUCCESS") {
    const updatedData = (state.data || []).map((recipe) => (recipe.id === action.payload ? action.payload : recipe));

    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      data: updatedData,
      isError: false,
    };
  } else if (action.type === "UPDATE_RECIPE_ERROR") {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isError: true,
      errorMessage: action.payload,
      data: [], // Set data to an empty array in case of an error
    };
  } else {
    return state;
  }
};

export default EditRecipes;
