import {instance} from '../../../utils/serviceApi';
import {RN_BASE_URL} from "@env"

export const editProfile = (data, navigate) => async (dispatch) => {
  try {
    dispatch({type: 'EDIT_PROFILE_PENDING'});
    const response = await instance.put(`${RN_BASE_URL}/user`, data);
    dispatch({type: 'EDIT_PROFILE_SUCCESS', payload: response.data.data});
    setTimeout(() => {
        navigate('Login');
      }, 1000);
  } catch (err) {
    console.error('Error during edit profile user:', err);
    dispatch({type: 'EDIT_PROFILE_FAILED', payload: err.response.data});
  }
};
