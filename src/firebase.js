import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCmJIPWdPpwxZF__dSOPGj6hLZut6YVLAw",
    authDomain: "facebook-messenger-clone-e1695.firebaseapp.com",
    projectId: "facebook-messenger-clone-e1695",
    storageBucket: "facebook-messenger-clone-e1695.appspot.com",
    messagingSenderId: "717372811221",
    appId: "1:717372811221:web:2c96a956451ca72ab63f5c",
    measurementId: "G-DF2T8BMD3J"
});

const db = firebaseApp.firestore();

export default db;