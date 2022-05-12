import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4Qe5tNkahZ53XjF6FS_CBhPddWadQUIg",
  authDomain: "hello-chatties.firebaseapp.com",
  databaseURL: "https://hello-chatties-default-rtdb.firebaseio.com/",
  projectId: "hello-chatties",
  storageBucket: "hello-chatties.appspot.com",
  messagingSenderId: "100637963927",
  appId: "1:100637963927:web:23127add742294b97f5bd2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //initialize the app with firebaseconfig
const db = firebaseApp.firestore(); //accessing the firestore instance of the firebase(the database)
const auth = firebase.auth(); // ofr handling authentication
const provider = new firebase.auth.GoogleAuthProvider(); //goolge authentication

export { auth, provider };
export default db;
