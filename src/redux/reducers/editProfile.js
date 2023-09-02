const initialState = {
    data: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
  };
  
  const editProfile = (state = initialState,{type, payload}) => {
    switch (type) {
      case "EDIT_PROFILE_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "EDIT_PROFILE_SUCCESS":
        return {
          ...state,
          data: payload,
          isLoading: false,
          errorMessage: "",
          isError: false,
        };
      case "EDIT_PROFILE_FAILED":
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
  
  export default editProfile;