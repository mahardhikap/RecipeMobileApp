const initialState = {
    bookmark: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
  };
  
  const getBookmarkedMenu = (state = initialState,{type, payload}) => {
    switch (type) {
      case "GET_BOOKMARK_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_BOOKMARK_SUCCESS":
        return {
          ...state,
          bookmark: payload,
          isLoading: false,
          errorMessage: "",
          isError: false,
        };
      case "GET_BOOKMARK_FAILED":
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
  
  export default getBookmarkedMenu;