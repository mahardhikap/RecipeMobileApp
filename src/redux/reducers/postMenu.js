const initialState = {
    data: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
  };
  
  const postMenu = (state = initialState,{type, payload}) => {
    switch (type) {
      case "POST_MENU_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "POST_MENU_SUCCESS":
        return {
          ...state,
          data: payload,
          isLoading: false,
          errorMessage: "",
          isError: false,
        };
      case "POST_MENU_FAILED":
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
  
  export default postMenu;