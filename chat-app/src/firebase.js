import firebase from "firebase/app"
import "firebase/auth"


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBm_pIRSzDc93JzGV8jddWoQNWMcqMKbpY",
    authDomain: "mogram-f4520.firebaseapp.com",
    projectId: "mogram-f4520",
    storageBucket: "mogram-f4520.appspot.com",
    messagingSenderId: "426665226115",
    appId: "1:426665226115:web:32a1901e969b1ef36650b6"
  }).auth();