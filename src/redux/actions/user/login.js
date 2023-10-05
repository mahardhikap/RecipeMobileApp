import AsyncStorage from "@react-native-async-storage/async-storage";
import {RN_BASE_URL} from "@env"
import axios from "axios";

export const login = (data) => async (dispatch) => {
  try {
    let url = await RN_BASE_URL
    dispatch({ type: "USER_LOGIN_PENDING" });
    const response = await axios.post(`${url}/login`, data); 
    // console.log('cek response, login', response)
    const getToken = await response.data.data.token;
    const getUserId = await response.data.data.id;
    await AsyncStorage.setItem("token", getToken);
    await AsyncStorage.setItem("id", getUserId.toString());
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data.data });
    // setTimeout(() => {
    //   navigate('IndexRoute');
    // }, 1000);
  } catch (err) {
    console.error("Error during login:", err);
    dispatch({ type: "USER_LOGIN_FAILED", payload: err.response.data });
  }
};