import {instance} from '../../../utils/serviceApi';
import {RN_BASE_URL} from '@env';
import { getLikedMenu } from './getLikedMenu';

export const likedMenu = id => async dispatch => {
  try {
    let url = await RN_BASE_URL;
    dispatch({type: 'LIKE_MENU_PENDING'});
    const response = await instance.post(`${url}/like/${id}`);
    console.log(response, 'ini response dari liked');
    dispatch(getLikedMenu())
    dispatch({type: 'LIKE_MENU_SUCCESS', payload: response.data.data});
  } catch (err) {
    console.error('Error during like menu:', err);
    dispatch({type: 'LIKE_MENU_FAILED', payload: err.response.data});
  }
};
