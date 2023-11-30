const initialState = {
  data: null,
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const userRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_RECIPES_PENDING":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_USER_RECIPES_SUCCESS":
      return { ...state, isLoading: false, data: action.payload, isError: false };
    case "FETCH_USER_RECIPES_ERROR":
      return { ...state, isLoading: false, isError: true, errorMessage: action.payload };
    default:
      return state;
  }
};

export default userRecipesReducer;
