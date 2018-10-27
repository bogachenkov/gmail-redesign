import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from './types';

export const showNotification = (message, time = 5000) => dispatch => {
  dispatch({
    type: SHOW_NOTIFICATION,
    payload: {
      message
    }
  });
  setTimeout(() => {
    dispatch({
      type: HIDE_NOTIFICATION
    })
  }, time)
}
