import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDXNR2nFb4Uy86_7D7rhroSGkYlQ-nAgHA",
    authDomain: "issot-clothing.firebaseapp.com",
    databaseURL: "https://issot-clothing.firebaseio.com",
    projectId: "issot-clothing",
    storageBucket: "issot-clothing.appspot.com",
    messagingSenderId: "704043224067",
    appId: "1:704043224067:web:752b93d16abcdb1c339236",
    measurementId: "G-TV3ZET5B22"
  }

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;