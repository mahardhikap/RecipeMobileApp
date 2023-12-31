const initialState = {
    like: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
  };
  
  const likedMenu = (state = initialState,{type, payload}) => {
    switch (type) {
      case "LIKE_MENU_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "LIKE_MENU_SUCCESS":
        return {
          ...state,
          like: payload,
          isLoading: false,
          errorMessage: "",
          isError: false,
        };
      case "LIKE_MENU_FAILED":
        return {
          ...state,
          like: null,
          errorMessage: payload,
          isLoading: false,
          isError: true,
        };
      default:
        return state;
    }
  };
  
  export default likedMenu;