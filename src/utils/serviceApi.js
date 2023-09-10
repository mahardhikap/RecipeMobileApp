import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RN_BASE_URL} from "@env"

const instance = axios.create({
  baseURL: `${RN_BASE_URL}`,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

instance.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.error("Error retrieving token:", error);
  }
  return config;
});

export { instance };