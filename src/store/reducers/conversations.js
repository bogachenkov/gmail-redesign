import conversations from '../../data/conversations';
import {
  LOADING_CONVERSATION,
  CONVERSATION_LOADED,
  ADD_REPLY,
  SELECT_ALL,
  UNSELECT_ALL,
  SELECT_CONV,
  UNSELECT_CONV
} from '../actions/types';

const initalState = {
  conversations,
  openedConversation: null,
  loading: false,
  selectedConversations: []
}

const addReplyToConversation = (conversations, reply, id) => {
  const updatedConversations = [...conversations].map(cnv => {
    if (cnv.id === id) cnv.messages.push(reply);
    return cnv;
  });
  return updatedConversations;
}

const selectConv = (arr, id) => {
  const convs = [...arr];
  convs.push(id);
  return convs;
}
const unselectConv = (arr, id) => {
  return [...arr].filter(el => el !== id)
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
    case ADD_REPLY:
      return {
        ...state,
        conversations: addReplyToConversation(state.conversations, action.payload.reply, action.payload.conversationID),
      }
    case SELECT_ALL:
      return {
        ...state,
        openedConversation: null,
        selectedConversations: state.conversations.map(cnv => cnv.id)
      }
    case UNSELECT_ALL:
      return {
        ...state,
        selectedConversations: []
      }
    case SELECT_CONV:
      return {
        ...state,
        selectedConversations: selectConv(state.selectedConversations, action.payload.convId),
        openedConversation: null
      }
    case UNSELECT_CONV:
      return {
        ...state,
        selectedConversations: unselectConv(state.selectedConversations, action.payload.convId),
      }
    default:
      return state;
  }
}
