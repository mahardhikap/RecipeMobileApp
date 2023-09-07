import { instance } from "../../../utils/serviceApi";
import {RN_BASE_URL} from "@env"

export const likedMenu = (data) => async (dispatch) => {
  try {
    dispatch({ type: "LIKE_MENU_PENDING" });
    const response = await instance.post(`${RN_BASE_URL}/like`, data); 
    dispatch({ type: "LIKE_MENU_SUCCESS", payload: response.data.data });
  } catch (err) {
    console.error("Error during like menu:", err);
    dispatch({ type: "LIKE_MENU_FAILED", payload: err.response.data });
  }
};