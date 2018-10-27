import {combineReducers} from 'redux';

import conversationsReducer from './conversations';
import notificationReducer from './notification';

export default combineReducers({
  conversations: conversationsReducer,
  notification: notificationReducer
});
