const initialState = {
    data: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
  };
  
  const getMenuUser = (state = initialState,{type, payload}) => {
    switch (type) {
      case "GETMENU_USER_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "GETMENU_USER_SUCCESS":
        return {
          ...state,
          data: payload,
          isLoading: false,
          errorMessage: "",
          isError: false,
        };
      case "GETMENU_USER_FAILED":
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
  
  export default getMenuUser;