import {instance} from '../../../utils/serviceApi';
import {RN_BASE_URL} from "@env"

export const updateUser = () => async (dispatch) => {
  try {
    let url = await RN_BASE_URL
    dispatch({type: 'UPDATE_USER_PENDING'});
    const response = await instance.get(`${url}/get-user`);
    dispatch({type: 'UPDATE_USER_SUCCESS', payload: response.data.data});
  } catch (err) {
    console.error('Error during update user:', err);
    dispatch({type: 'UPDATE_USER_FAILED', payload: err.response.data});
  }
};
