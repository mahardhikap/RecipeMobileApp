import { instance } from "../../../utils/serviceApi";
import {RN_BASE_URL} from "@env"

export const getPopularMenu = () => async (dispatch) => {
  try {
    let url = await RN_BASE_URL
    dispatch({ type: "POPULAR_PENDING" });
    const response = await instance.get(`${url}/sort-menu?searchby=&search=&sortby=like_count&sort=DESC&page=1&limit=3`); 
    dispatch({ type: "POPULAR_SUCCESS", payload: response.data.data });
  } catch (err) {
    console.error("Error during get popular menu:", err);
    dispatch({ type: "POPULAR_FAILED", payload: err.response.data });
  }
};