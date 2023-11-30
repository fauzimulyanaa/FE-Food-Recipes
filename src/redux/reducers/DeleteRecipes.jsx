const initialState = {
  data: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  errorMessage: "",
};

const menu_delete = (state = initialState, action) => {
  if (action.type === "GET_MENU_DELETE_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "GET_MENU_DELETE_SUCCESS") {
    const updatedData = state.data.filter((recipe) => recipe.id !== action.payload);
    return {
      ...state,
      isLoading: false,
      isSuccess: true,
      isError: false,
      data: updatedData,
    };
  } else if (action.type === "GET_MENU_DELETE_ERROR") {
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

export default menu_delete;
