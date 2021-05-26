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

// taking the user object and store it, asynch -> making an API request
// it should work when a user sign in, getting an actual object not null, making qurey: asking firebase a doc or collection

/* if not false if(!userAuth)
Firebase can give two objects: 
1) Query reference -> references the current place of the object
2) Query Snapshot*/
export const createUserProfileDocument =
async(userAuth, additionalData) => {
  if(!userAuth) return;
// with this you can see that if the property actually exists from , snapshot represents the data
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
// in order to crate the object that isn't stored yet, you need to use reference
    if(!snapShot.exists)
    {
      const {displayName, email} = userAuth;
      const createAt = new Date();
// async request to database to store data, .set being the create method
      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      }catch (error){
          console.log("error creating user", error.message);
          }
    }
    return userRef;
  };


firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;