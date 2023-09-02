import { instance } from "../../../utils/serviceApi";

const url = "https://fluffy-ox-lapel.cyclic.app";

export const editMenu = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "EDIT_PROFILE_PENDING" });
    const response = await instance.put(`${url}/user`, data); 
    dispatch({ type: "EDIT_PROFILE_SUCCESS", payload: response.data.data });
    setTimeout(() => {
        navigate('IndexRoute');
      }, 1000);
  } catch (err) {
    console.error("Error during edit profile user:", err);
    dispatch({ type: "EDIT_PROFILE_FAILED", payload: err.response.data });
  }
};