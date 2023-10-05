import { instance } from "../../../utils/serviceApi";
import {RN_BASE_URL} from "@env"
import { getMenuUser } from "./getMenuUser";

export const postMenu = (data, navigate) => async (dispatch) => {
  try {
    let url = await RN_BASE_URL
    dispatch({ type: "POST_MENU_PENDING" });
    const response = await instance.post(`${url}/menu`, data); 
    dispatch({ type: "POST_MENU_SUCCESS", payload: response.data.data });
    dispatch(getMenuUser('created_at', 'DESC', 1, 4))
    setTimeout(() => {
        navigate('InputMenu');
      }, 1000);
  } catch (err) {
    console.error("Error during post menu user:", err);
    dispatch({ type: "POST_MENU_FAILED", payload: err.response.data });
  }
};