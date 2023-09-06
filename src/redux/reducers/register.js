const initialState = {
    data: null,
    errorMessage: '',
    isLoading: false,
    isError: false,
  };
  
  const register = (state = initialState, {type, payload}) => {
    switch (type) {
      case 'REGISTER_PENDING':
        return {
          ...state,
          isLoading: true,
        };
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          data: payload,
          isLoading: false,
          errorMessage: '',
          isError: false,
        };
      case 'REGISTER_FAILED':
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
  
  export default register;  