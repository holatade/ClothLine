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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = ({ history }) => auth.signInWithPopup(provider);

export default firebase;
