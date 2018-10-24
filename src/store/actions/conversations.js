import {
  LOADING_CONVERSATION,
  CONVERSATION_LOADED
} from './types';

export const selectConversation = conversation => dispatch => {
  dispatch({
    type: LOADING_CONVERSATION
  });
  setTimeout(() => {
    dispatch({
      type: CONVERSATION_LOADED,
      payload: {
        conversation
      }
    })
  }, 200)
}
