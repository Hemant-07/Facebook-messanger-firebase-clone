
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// const firebaseApp = firebase.initializeApp({

const firebaseConfig = {

    apiKey: "AIzaSyBOqMRGTh2CBfx_48L3AGp_RtmiF_-BHEc",
    authDomain: "facebook-messanger-clone-52b63.firebaseapp.com",
    projectId: "facebook-messanger-clone-52b63",
    storageBucket: "facebook-messanger-clone-52b63.appspot.com",
    messagingSenderId: "63096406619",
    appId: "1:63096406619:web:9103d5a42872998447357e",
    measurementId: "G-0PBZPXX2H5"
}
// })
const firebaseApp = firebase.initializeApp(firebaseConfig);   

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export default db;



