import {
  LOADING_CONVERSATION,
  CONVERSATION_LOADED,
  ADD_REPLY,
  SELECT_ALL,
  UNSELECT_ALL,
  SELECT_CONV,
  UNSELECT_CONV,
  DELETE_SELECTED_CONV,
  DELETE_CONV,
  DELETE_MESSAGE
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
export const selectConversation = conv_id => ({
  type: SELECT_CONV,
  payload: {
    conv_id
  }
});
export const unselectConversation = conv_id => ({
  type: UNSELECT_CONV,
  payload: {
    conv_id
  }
});

export const deleteSelectedConversations = () => ({
  type: DELETE_SELECTED_CONV
});
export const deleteConversation = (conv_id) => ({
  type: DELETE_CONV,
  payload: {
    conv_id
  }
});

export const deleteMessage = (conv_id, message_id) => ({
  type: DELETE_MESSAGE,
  payload: {
    conv_id,
    message_id
  }
})
