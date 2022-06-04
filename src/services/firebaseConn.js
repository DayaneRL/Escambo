import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD1sO6OLgsva1P5Bij5SSKtU_JJGO_TqVQ",
    authDomain: "escambo-a34c9.firebaseapp.com",
    projectId: "escambo-a34c9",
    storageBucket: "escambo-a34c9.appspot.com",
    messagingSenderId: "825281384818",
    appId: "1:825281384818:web:8e52f06f1a5bf2774a0deb"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;