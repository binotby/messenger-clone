import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQyjvSIEvPYEoFbnNjQBXd2Rq-oAHjVKE",
    authDomain: "messenger-clone-biapps.firebaseapp.com",
    databaseURL: "https://messenger-clone-biapps-default-rtdb.firebaseio.com",
    projectId: "messenger-clone-biapps",
    storageBucket: "messenger-clone-biapps.appspot.com",
    messagingSenderId: "249697782216",
    appId: "1:249697782216:web:af40231f3320dc5f2118fd",
    measurementId: "G-2QXV7LTXEX"
});

const db = firebaseApp.firestore();

export default  db;