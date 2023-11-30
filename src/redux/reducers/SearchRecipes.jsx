const initialState = {
  data: null,
  searchTerm: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: "",
};

const searchRecipes = (state = initialState, action) => {
  if (action.type === "SEARCH_RECIPES_PENDING") {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  } else if (action.type === "SEARCH_RECIPES_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      data: action.payload, // Assuming action.payload is an array of menus
      searchTerm: "",
      isError: false,
    };
  } else if (action.type === "SEACRH_RECIPES_ERROR") {
    return {
      ...state,
      isLoading: false,
      isSuccess: false,
      isError: true,
      errorMessage: action.payload,
    };
  } else {
    return state;
  }
};

export default searchRecipes;
