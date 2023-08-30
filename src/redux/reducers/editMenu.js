const initialState = {
    data: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
  };
  
  const editMenu = (state = initialState,{type, payload}) => {
    switch (type) {
      case "EDIT_MENU_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "EDIT_MENU_SUCCESS":
        return {
          ...state,
          data: payload,
          isLoading: false,
          errorMessage: "",
          isError: false,
        };
      case "EDIT_MENU_FAILED":
        return {
          ...state,
          data: null,
          errorMessage: payload,
          isLoading: false,
          isError: true,
        };
      default:
        return state;
    }
  };
  
  export default editMenu;