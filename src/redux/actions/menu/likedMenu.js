import {instance} from '../../../utils/serviceApi';
import {RN_BASE_URL} from '@env';
import { getLikedMenu } from './getLikedMenu';

export const likedMenu = id => async dispatch => {
  try {
    let url = await RN_BASE_URL;
    dispatch({type: 'LIKE_MENU_PENDING'});
    const response = await instance.post(`${url}/like/${id}`);
    await dispatch({type: 'LIKE_MENU_SUCCESS', payload: response.data.data});
    console.log('ini response dari liked', response);
    dispatch(getLikedMenu())
  } catch (err) {
    console.error('Error during like menu:', err);
    dispatch({type: 'LIKE_MENU_FAILED', payload: err.response.data});
  }
};
