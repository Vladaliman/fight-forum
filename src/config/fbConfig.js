import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2KmdOtZM6WZkrCKCRfWTg9dUQ21hHlng",
  authDomain: "fight-forum-3db1a.firebaseapp.com",
  databaseURL: "https://fight-forum-3db1a.firebaseio.com",
  projectId: "fight-forum-3db1a",
  storageBucket: "fight-forum-3db1a.appspot.com",
  messagingSenderId: "878114654726",
  appId: "1:878114654726:web:7d61bcf27252392dcf1187",
  measurementId: "G-0VZFJ735B6",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
