const initialState = {
    like: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
  };
  
  const getLikedMenu = (state = initialState,{type, payload}) => {
    switch (type) {
      case "GET_LIKE_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_LIKE_SUCCESS":
        return {
          ...state,
          like: payload,
          isLoading: false,
          errorMessage: "",
          isError: false,
        };
      case "GET_LIKE_FAILED":
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
  
  export default getLikedMenu;