const initialState = {
    data: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
  };
  
  const deleteMenu = (state = initialState,{type, payload}) => {
    switch (type) {
      case "DELETE_MENU_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "DELETE_MENU_SUCCESS":
        return {
          ...state,
          data: payload,
          isLoading: false,
          errorMessage: "",
          isError: false,
        };
      case "DELETE_MENU_FAILED":
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
  
  export default deleteMenu;