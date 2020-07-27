import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCUNB92R7MzTblhllOy2t5hLIebEz2TYMg",
    authDomain: "chatty-9de71.firebaseapp.com",
    databaseURL: "https://chatty-9de71.firebaseio.com"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();