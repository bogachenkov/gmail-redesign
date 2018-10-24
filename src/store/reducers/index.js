import {combineReducers} from 'redux';

import conversationsReducer from './conversations';
import usersReducer from './users';

export default combineReducers({
  users: usersReducer,
  conversations: conversationsReducer
});
