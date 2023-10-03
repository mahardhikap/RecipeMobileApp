const initialState = {
    bookmark: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
  };
  
  const bookmarkedMenu = (state = initialState,{type, payload}) => {
    switch (type) {
      case "BOOKMARK_MENU_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "BOOKMARK_MENU_SUCCESS":
        return {
          ...state,
          bookmark: payload,
          isLoading: false,
          errorMessage: "",
          isError: false,
        };
      case "BOOKMARK_MENU_FAILED":
        return {
          ...state,
          bookmark: null,
          errorMessage: payload,
          isLoading: false,
          isError: true,
        };
      default:
        return state;
    }
  };
  
  export default bookmarkedMenu;