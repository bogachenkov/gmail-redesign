import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION
} from '../actions/types';

const initalState = {
  show: false,
  message: ''
}

export default function(state = initalState, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        show: true,
        message: action.payload.message
      }
    case HIDE_NOTIFICATION:
      return {
        ...state,
        show: false,
        message: ''
      }
    default:
      return {
        ...state
      }
  }
}
