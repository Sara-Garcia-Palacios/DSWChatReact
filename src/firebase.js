import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyACfvp4jSgCZLluEMT3h40acFbxXaZlt94",
  authDomain: "michat-e32b1.firebaseapp.com",
  projectId: "michat-e32b1",
  storageBucket: "michat-e32b1.appspot.com",
  messagingSenderId: "91339373468",
  appId: "1:91339373468:web:b4a903afe009d89e5c6659"
  };
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}