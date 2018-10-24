import conversations from '../../data/conversations';
import {
  LOADING_CONVERSATION,
  CONVERSATION_LOADED
} from '../actions/types';

const initalState = {
  conversations,
  openedConversation: null,
  loading: false
}

export default function(state = initalState, action) {
  switch (action.type) {
    case LOADING_CONVERSATION:
      return {
        ...state,
        loading: true,
        //openedConversation: null
      }
    case CONVERSATION_LOADED:
      return {
        ...state,
        loading: false,
        openedConversation: action.payload.conversation
      }
    default:
      return state;
  }
}
