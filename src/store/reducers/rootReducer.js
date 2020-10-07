import authReducer from './authReducer';
import gearListsReducer from './gearListsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  gearLists: gearListsReducer,
});

export default rootReducer;
