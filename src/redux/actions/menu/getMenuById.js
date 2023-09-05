import { instance } from "../../../utils/serviceApi";
import {RN_BASE_URL} from "@env"

const url = RN_BASE_URL;

export const getMenuById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "GETMENU_ID_PENDING" });
    const response = await instance.get(`${url}/menu/${id}`); 
    dispatch({ type: "GETMENU_ID_SUCCESS", payload: response.data.data });
  } catch (err) {
    console.error("Error during get menu by id:", err);
    dispatch({ type: "GETMENU_ID_FAILED", payload: err.response.data });
  }
};