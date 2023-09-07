import { instance } from "../../../utils/serviceApi";
import {RN_BASE_URL} from "@env"

export const deleteMenu = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_MENU_PENDING" });
    const response = await instance.delete(`${RN_BASE_URL}/menu/${id}`); 
    dispatch({ type: "DELETE_MENU_SUCCESS", payload: response.data.data });
  } catch (err) {
    console.error("Error during delete menu user:", err);
    dispatch({ type: "DELETE_MENU_FAILED", payload: err.response.data });
  }
};