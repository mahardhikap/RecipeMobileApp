const initialState = {
    data: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
  };
  
  const updateUser = (state = initialState,{type, payload}) => {
    switch (type) {
      case "UPDATE_USER_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "UPDATE_USER_SUCCESS":
        return {
          ...state,
          data: payload,
          isLoading: false,
          errorMessage: "",
          isError: false,
        };
      case "UPDATE_USER_FAILED":
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
  
  export default updateUser;