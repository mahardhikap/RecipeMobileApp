import { instance } from "../../../utils/serviceApi";
import {RN_BASE_URL} from "@env"

export const getMenuUser = () => async (dispatch) => {
  try {
    dispatch({ type: "GETMENU_USER_PENDING" });
    const response = await instance.get(`${RN_BASE_URL}/user/page/sort?sortby=created_at&sort=DESC&page&limit=1000`); 
    dispatch({ type: "GETMENU_USER_SUCCESS", payload: response.data.data });
  } catch (err) {
    console.error("Error during get menu user:", err);
    dispatch({ type: "GETMENU_USER_FAILED", payload: err.response.data });
  }
};