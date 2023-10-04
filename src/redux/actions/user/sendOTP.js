import axios from "axios";
import {RN_BASE_URL} from "@env"
import { instance } from "../../../utils/serviceApi";

export const sendOTP = (email) => async (dispatch) => {
  try {
    let url = await RN_BASE_URL
    dispatch({type: 'SEND_OTP_PENDING'});
    const response = await axios.post(`${url}/forget/${email}`)
    // console.log('ini yang dikirim', response)
    dispatch({type: 'SEND_OTP_SUCCESS', payload: response.data});
  } catch (err) {
    console.error('Error during send OTP:', err);
    dispatch({type: 'SEND_OTP_FAILED', payload: err.response.data});
  }
};
