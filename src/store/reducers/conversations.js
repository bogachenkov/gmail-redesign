import conversations from '../../data/conversations';
import {
  LOADING_CONVERSATION,
  CONVERSATION_LOADED,
  ADD_REPLY,
  SELECT_ALL,
  UNSELECT_ALL,
  SELECT_CONV,
  UNSELECT_CONV,
  DELETE_CONV,
  DELETE_SELECTED_CONV,
  DELETE_MESSAGE
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
const deleteMessage = (arr, conv_id, message_id) => {
  const conversations = [...arr].map(cnv => {
    if (cnv.id === conv_id) cnv.messages = cnv.messages.filter(msg => msg.id !== message_id);
    return cnv;
  });
  return conversations;
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
        selectedConversations: selectConv(state.selectedConversations, action.payload.conv_id),
        openedConversation: null
      }
    case UNSELECT_CONV:
      return {
        ...state,
        selectedConversations: unselectConv(state.selectedConversations, action.payload.conv_id),
      }
    case DELETE_SELECTED_CONV:
      return {
        ...state,
        selectedConversations: [],
        conversations: [...state.conversations].filter(conv => !state.selectedConversations.includes(conv.id))
      }
    case DELETE_CONV:
      return {
        ...state,
        conversations: [...state.conversations].filter(conv => conv.id !== action.payload.conv_id),
        openedConversation: state.openedConversation && state.openedConversation.id === action.payload.conv_id ? null : state.openedConversation
      }
    case DELETE_MESSAGE:
      return {
        ...state,
        conversations: deleteMessage(state.conversations, action.payload.conv_id, action.payload.message_id)
      }
    default:
      return state;
  }
}
