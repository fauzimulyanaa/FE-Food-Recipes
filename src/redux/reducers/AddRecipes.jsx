const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: "",
};

const AddRecipes = (state = initialState, action) => {
  if (action.type === "POST_MENU_PENDING") {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  } else if (action.type === "POST_MENU_SUCCESS") {
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      data: action.payload,
      isError: false,
    };
  } else if (action.type === "POST_MENU_ERROR") {
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

export default AddRecipes;
