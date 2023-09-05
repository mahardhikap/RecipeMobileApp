import AsyncStorage from "@react-native-async-storage/async-storage";
import { instance } from "../../../utils/serviceApi";
import {RN_BASE_URL} from "@env"

const url = RN_BASE_URL;

export const login = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const response = await instance.post(`${url}/login`, data); 
    const getToken = await response.data.data.token;
    await AsyncStorage.setItem("token", getToken);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data.data });
    setTimeout(() => {
      navigate('IndexRoute');
    }, 2000);
  } catch (err) {
    console.error("Error during login:", err);
    dispatch({ type: "USER_LOGIN_FAILED", payload: err.response.data });
  }
};