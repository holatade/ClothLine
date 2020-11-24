import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyBoLlVaZ6aow8m4cyUvp-EXWN-MZ3HbjQw",
  authDomain: "cloth-line.firebaseapp.com",
  databaseURL: "https://cloth-line.firebaseio.com",
  projectId: "cloth-line",
  storageBucket: "cloth-line.appspot.com",
  messagingSenderId: "378614010763",
  appId: "1:378614010763:web:190f1152b3cd06303cd58e",
  measurementId: "G-3YSPFVCVJ8",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = userRef.get();

  if (!(await snapShot).exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creatin user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = ({ history }) => auth.signInWithPopup(provider);

export default firebase;
