import axios from "axios";
import {RN_BASE_URL} from "@env"

export const changePassword = (data) => async (dispatch) => {
  try {
    let url = await RN_BASE_URL
    dispatch({type: 'CHANGE_PASSWORD_PENDING'});
    const response = await axios.put(`${url}/forget`, data)
    console.log('ini yang dikirim', response)
    dispatch({type: 'CHANGE_PASSWORD_SUCCESS', payload: response.data});
  } catch (err) {
    console.error('Error during change password:', err);
    dispatch({type: 'CHANGE_PASSWORD_FAILED', payload: err.response.data});
  }
};