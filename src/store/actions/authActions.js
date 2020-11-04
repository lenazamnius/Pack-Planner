import { actionTypes } from 'redux-firestore';

export const logIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch((error) => {
        dispatch({ type: 'LOGIN_ERROR', error });
      });
  };
};

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        // firebase.logout();
        dispatch({ type: 'LOGOUT_SUCCESS' });
        dispatch({ type: actionTypes.CLEAR_DATA });
      })
      .catch((error) => {
        dispatch({ type: 'LOGOUT_ERROR', error });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirebase().firestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.newPassword)
      .then((resp) => {
        return firestore.collection('users').doc(resp.user.uid).set({
          name: newUser.name,
          email: newUser.email,
        });
      })
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      })
      .catch((error) => {
        dispatch({ type: 'SIGNUP_ERROR', error });
      });
  };
};