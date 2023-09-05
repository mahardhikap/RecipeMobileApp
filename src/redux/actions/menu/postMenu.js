import { instance } from "../../../utils/serviceApi";
import { getMenuUser } from "./getMenuUser";
import {RN_BASE_URL} from "@env"

const url = RN_BASE_URL;

export const postMenu = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "POST_MENU_PENDING" });
    const response = await instance.post(`${url}/menu`, data); 
    dispatch({ type: "POST_MENU_SUCCESS", payload: response.data.data });
    dispatch(getMenuUser())
    setTimeout(() => {
        navigate('InputMenu');
      }, 1000);
  } catch (err) {
    console.error("Error during post menu user:", err);
    dispatch({ type: "POST_MENU_FAILED", payload: err.response.data });
  }
};