import {
  LOADING_CONVERSATION,
  CONVERSATION_LOADED,
  ADD_REPLY,
  SELECT_ALL,
  UNSELECT_ALL,
  SELECT_CONV,
  UNSELECT_CONV
} from './types';

export const loadConversation = conversation => dispatch => {
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


export const addReply = (reply, conversationID) => ({
  type: ADD_REPLY,
  payload: {
    reply,
    conversationID
  }
});

export const selectAll = () => ({
  type: SELECT_ALL
});
export const unselectAll = () => ({
  type: UNSELECT_ALL
});
export const selectConversation = convId => ({
  type: SELECT_CONV,
  payload: {
    convId
  }
});
export const unselectConversation = convId => ({
  type: UNSELECT_CONV,
  payload: {
    convId
  }
});
