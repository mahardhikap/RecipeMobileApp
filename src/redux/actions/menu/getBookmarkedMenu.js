import {instance} from '../../../utils/serviceApi';
import {RN_BASE_URL} from '@env';

export const getBookmarkedMenu = () => async dispatch => {
  try {
    let url = await RN_BASE_URL;
    dispatch({type: 'GET_BOOKMARK_PENDING'});
    const response = await instance.get(`${url}/bookmark`);
    console.log(response, 'ini response dari get bookmarked');
    dispatch({type: 'GET_BOOKMARK_SUCCESS', payload: response.data.data});
  } catch (err) {
    console.error('Error during get bookmark menu:', err);
    dispatch({type: 'GET_BOOKMARK_FAILED', payload: err.response.data});
  }
};