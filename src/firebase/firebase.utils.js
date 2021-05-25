import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBXvI77atkGv5m0DAgQ_NRwIdtdydbBHsE",
    authDomain: "crwn-db-2717a.firebaseapp.com",
    projectId: "crwn-db-2717a",
    storageBucket: "crwn-db-2717a.appspot.com",
    messagingSenderId: "24811549808",
    appId: "1:24811549808:web:1ef1362e9be9419473f0b5",
    measurementId: "G-TEB625RXLK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;