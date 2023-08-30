import { instance } from "../../../utils/serviceApi";

const url = "https://fluffy-ox-lapel.cyclic.app";

export const deleteMenu = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_MENU_PENDING" });
    const response = await instance.delete(`${url}/menu/${id}`); 
    dispatch({ type: "DELETE_MENU_SUCCESS", payload: response.data.data });
  } catch (err) {
    console.error("Error during delete menu user:", err);
    dispatch({ type: "DELETE_MENU_FAILED", payload: err.response.data });
  }
};