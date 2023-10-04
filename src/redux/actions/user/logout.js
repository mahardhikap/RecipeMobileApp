import AsyncStorage from '@react-native-async-storage/async-storage';

export const logout = (navigate) => {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        await AsyncStorage.removeItem('token');
        setTimeout(()=>{
          navigate('Login');
        }, 2000)
      }
      dispatch({ type: 'USER_DELETE_TOKEN' });
    } catch (error) {
      console.error('Error while logging out:', error);
    }
  };
};