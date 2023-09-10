import {instance} from '../../../utils/serviceApi';
import {RN_BASE_URL} from '@env';

export const getLikedMenu = () => async dispatch => {
  try {
    let url = await RN_BASE_URL;
    dispatch({type: 'GET_LIKE_PENDING'});
    const response = await instance.get(`${url}/like`);
    console.log(response, 'ini response dari get liked');
    dispatch({type: 'GET_LIKE_SUCCESS', payload: response.data.data});
  } catch (err) {
    console.error('Error during get like menu:', err);
    dispatch({type: 'GET_LIKE_FAILED', payload: err.response.data});
  }
};
