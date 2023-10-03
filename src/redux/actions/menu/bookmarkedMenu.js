import {instance} from '../../../utils/serviceApi';
import {RN_BASE_URL} from '@env';
import { getBookmarkedMenu } from './getBookmarkedMenu';

export const bookmarkedMenu = id => async dispatch => {
  try {
    let url = await RN_BASE_URL;
    dispatch({type: 'BOOKMARK_MENU_PENDING'});
    const response = await instance.post(`${url}/bookmark/${id}`);
    await dispatch({type: 'BOOKMARK_MENU_SUCCESS', payload: response.data.data});
    console.log('ini response dari bookmark', response);
    dispatch(getBookmarkedMenu())
  } catch (err) {
    console.error('Error during bookmark menu:', err);
    dispatch({type: 'BOOKMARK_MENU_FAILED', payload: err.response.data});
  }
};