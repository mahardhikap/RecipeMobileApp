const initialState = {
    data: null,
    errorMessage: '',
    isLoading: false,
    isError: false,
  };
  
  const activateUser = (state = initialState, {type, payload}) => {
    switch (type) {
      case 'ACTIVATE_PENDING':
        return {
          ...state,
          isLoading: true,
        };
      case 'ACTIVATE_SUCCESS':
        return {
          ...state,
          data: payload,
          isLoading: false,
          errorMessage: '',
          isError: false,
        };
      case 'ACTIVATE_FAILED':
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
  
  export default activateUser;  