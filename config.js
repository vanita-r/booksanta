import firebase from "firebase/app";
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyAToK8e41IgLNPsoEth23MERJhD-mq5-k4",
  authDomain: "barter-a4a60.firebaseapp.com",
  projectId: "barter-a4a60",
  storageBucket: "barter-a4a60.appspot.com",
  messagingSenderId: "1067855775398",
  appId: "1:1067855775398:web:17a59fd0eecc21cd105667"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
