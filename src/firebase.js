import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig    = {
        apiKey: "AIzaSyBv_F5ZNtHhR-Fm7YbvMzTMwsK4M93etZc",
        authDomain: "notes-66714.firebaseapp.com",
        projectId: "notes-66714",
        storageBucket: "gs://notes-66714.appspot.com",
        messagingSenderId: "805830140902",
        appId: "1:805830140902:web:9e8a298a42c996afa22c27"
      };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}