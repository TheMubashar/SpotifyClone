import firebase  from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJF7jmcT2xQgvTZDxyg5knc6mryZVFvJQ",
    authDomain: "spotify-clone-46f6b.firebaseapp.com",
    databaseURL: "https://spotify-clone-46f6b.firebaseio.com",
    projectId: "spotify-clone-46f6b",
    storageBucket: "spotify-clone-46f6b.appspot.com",
    messagingSenderId: "44425510125",
    appId: "1:44425510125:web:445e9343fdb83d96e820e4",
    measurementId: "G-KRL265EQB1"
};

// Initialize the app
const firebaseApp = firebase.initializeApp(firebaseConfig);
