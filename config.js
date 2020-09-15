import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAO48W0VdxafXNuLn7qNuQMXS9iZo1H0Po",
    authDomain: "story-hub-4a16a.firebaseapp.com",
    databaseURL: "https://story-hub-4a16a.firebaseio.com",
    projectId: "story-hub-4a16a",
    storageBucket: "story-hub-4a16a.appspot.com",
    messagingSenderId: "940402760337",
    appId: "1:940402760337:web:e4986b82f04384fde27d30",
    measurementId: "G-2BGZRMBJ0L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();