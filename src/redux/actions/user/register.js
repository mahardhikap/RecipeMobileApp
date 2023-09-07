import axios from "axios";
import {RN_BASE_URL} from "@env"

const url = RN_BASE_URL;

export const register = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_PENDING" });
    const response = await axios.post(`${url}/register`, data); 
    dispatch({ type: "REGISTER_SUCCESS", payload: response.data.data });
    setTimeout(() => {
      navigate('ActivateUser');
    }, 1000);
  } catch (err) {
    console.error("Error during register:", err);
    dispatch({ type: "REGISTER_FAILED", payload: err.response.data });
  }
}