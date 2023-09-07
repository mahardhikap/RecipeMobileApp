import { instance } from "../../../utils/serviceApi";
import { getMenuUser } from "./getMenuUser";
import {RN_BASE_URL} from "@env"

export const editMenu = (data, id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "EDIT_MENU_PENDING" });
    const response = await instance.put(`${RN_BASE_URL}/menu/${id}`, data); 
    dispatch({ type: "EDIT_MENU_SUCCESS", payload: response.data.data });
    dispatch(getMenuUser())
    setTimeout(() => {
        navigate('InputMenu');
      }, 1000);
  } catch (err) {
    console.error("Error during edit menu user:", err);
    dispatch({ type: "EDIT_MENU_FAILED", payload: err.response.data });
  }
};