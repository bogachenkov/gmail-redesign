import {combineReducers} from 'redux';

import conversationsReducer from './conversations';

export default combineReducers({
  conversations: conversationsReducer
});
