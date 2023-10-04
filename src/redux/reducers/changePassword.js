const initialState = {
    data: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
  };
  
  const changePassword = (state = initialState,{type, payload}) => {
    switch (type) {
      case "CHANGE_PASSWORD_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "CHANGE_PASSWORD_SUCCESS":
        return {
          ...state,
          data: payload,
          isLoading: false,
          errorMessage: "",
          isError: false,
        };
      case "CHANGE_PASSWORD_FAILED":
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
  
  export default changePassword;