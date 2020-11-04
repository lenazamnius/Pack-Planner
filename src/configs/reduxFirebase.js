import thunk from 'redux-thunk';
import firebase from './firebase';
import rootReducer from '../store/reducers/rootReducer';
import { createFirestoreInstance } from 'redux-firestore';
import { createStore, applyMiddleware, compose } from 'redux';
import { getFirebase } from 'react-redux-firebase';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument({ getFirebase }))),
);

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false,
};

export const rffProps = {
  firebase,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance,
  attachAuthIsReady: true,
};
