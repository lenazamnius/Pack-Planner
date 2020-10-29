import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import gearListReducer from './gearListReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  gearLists: gearListReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
