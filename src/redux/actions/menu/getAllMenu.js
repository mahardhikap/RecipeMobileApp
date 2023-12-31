import { instance } from "../../../utils/serviceApi";
import {RN_BASE_URL} from "@env"

export const getAllMenu = (searchby, search, sortby, sort, page, limit) => async (dispatch) => {
  try {
    let url = await RN_BASE_URL
    dispatch({ type: "GETMENU_ALL_PENDING" });
    const response = await instance.get(`${url}/sort-menu?searchby=${searchby}&search=${search}&sortby=${sortby}&sort=${sort}&page=${page}&limit=${limit}`); 
    dispatch({ type: "GETMENU_ALL_SUCCESS", payload: response.data.data });
  } catch (err) {
    console.error("Error during get menu all:", err);
    dispatch({ type: "GETMENU_ALL_FAILED", payload: err.response.data });
  }
};