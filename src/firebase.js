import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyANv2khm2QB8ix0dIY4uP3oMaip6w9dT-g",
  authDomain: "spotify-clone-654a4.firebaseapp.com",
  projectId: "spotify-clone-654a4",
  storageBucket: "spotify-clone-654a4.appspot.com",
  messagingSenderId: "760331828300",
  appId: "1:760331828300:web:dc920e4af4171b38dd88e9",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
