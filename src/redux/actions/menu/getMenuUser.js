import { instance } from "../../../utils/serviceApi";
import {RN_BASE_URL} from "@env"

export const getMenuUser = (sortby, sort, page, limit) => async (dispatch) => {
  try {
    let url = await RN_BASE_URL
    dispatch({ type: "GETMENU_USER_PENDING" });
    const response = await instance.get(`${url}/user/page/sort?sortby=${sortby}&sort=${sort}&page=${page}&limit=${limit}`); 
    dispatch({ type: "GETMENU_USER_SUCCESS", payload: response.data.data });
  } catch (err) {
    console.error("Error during get menu user:", err);
    dispatch({ type: "GETMENU_USER_FAILED", payload: err.response.data });
  }
};