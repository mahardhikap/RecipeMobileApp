const initialState = {
    data: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
  };
  
  const getPopularMenu = (state = initialState,{type, payload}) => {
    switch (type) {
      case "POPULAR_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "POPULAR_SUCCESS":
        return {
          ...state,
          data: payload,
          isLoading: false,
          errorMessage: "",
          isError: false,
        };
      case "POPULAR_FAILED":
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
  
  export default getPopularMenu;