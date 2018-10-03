import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDIlnMiFy3xEiUueWFNIyLMKUuaiz6RWlg",
  authDomain: "blueplan-c9a73.firebaseapp.com",
  databaseURL: "https://blueplan-c9a73.firebaseio.com",
  projectId: "blueplan-c9a73",
  storageBucket: "",
  messagingSenderId: "1022561413173"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
