const initialState = {
    data: null,
    errorMessage: "",
    isLoading: false,
    isError: false,
  };
  
  const sendOTP = (state = initialState,{type, payload}) => {
    switch (type) {
      case "SEND_OTP_PENDING":
        return {
          ...state,
          isLoading: true,
        };
      case "SEND_OTP_SUCCESS":
        return {
          ...state,
          data: payload,
          isLoading: false,
          errorMessage: "",
          isError: false,
        };
      case "SEND_OTP_FAILED":
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
  
  export default sendOTP;