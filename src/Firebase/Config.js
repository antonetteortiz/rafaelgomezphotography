import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBWq_VIyTD-HxZB-mvegRDkUACtP9j5qDQ",
  authDomain: "rafael-gomez-a01d2.firebaseapp.com",
  projectId: "rafael-gomez-a01d2",
  storageBucket: "rafael-gomez-a01d2.appspot.com",
  messagingSenderId: "1093549944162",
  appId: "1:1093549944162:web:db28a82108a65a0bec503b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };