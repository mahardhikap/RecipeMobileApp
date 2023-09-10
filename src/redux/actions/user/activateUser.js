import axios from "axios";
import {RN_BASE_URL} from "@env"

export const activateUser = (id) => async (dispatch) => {
  try {
    let url = await RN_BASE_URL
    dispatch({ type: "ACTIVATE_PENDING" });
    const response = await axios.get(`${url}/verify/${id}`); 
    dispatch({ type: "ACTIVATE_SUCCESS", payload: response.data });
  } catch (err) {
    console.error("Error during activate user:", err);
    dispatch({ type: "ACTIVATE_FAILED", payload: err.response.data });
  }
}