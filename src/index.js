import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import firebase from './firebase/config';
import { Provider, useSelector } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import { createFirestoreInstance } from 'redux-firestore';
import { createStore, applyMiddleware, compose } from 'redux';
import {
  isLoaded,
  getFirebase,
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase';

import App from './App';
import './index.css';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument({ getFirebase }))),
);

const rffProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
  return children;
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rffProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);
