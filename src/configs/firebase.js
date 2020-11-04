import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCkpRkUFBjzIuYWiLfgij2z2EhOFJEGr-k',
  authDomain: 'pack-planner-d6fa4.firebaseapp.com',
  databaseURL: 'https://pack-planner-d6fa4.firebaseio.com',
  projectId: 'pack-planner-d6fa4',
  storageBucket: 'pack-planner-d6fa4.appspot.com',
  messagingSenderId: '435824007545',
  appId: '1:435824007545:web:cecb9db872b64d8ae377a8',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
