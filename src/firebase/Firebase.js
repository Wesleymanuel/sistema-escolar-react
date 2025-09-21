import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaG9a2wBPYZhzJvZSWj13bRcnWFjTf9l0",
  authDomain: "fir-c1bd2.firebaseapp.com",
  projectId: "fir-c1bd2",
  storageBucket: "fir-c1bd2.firebasestorage.app",
  messagingSenderId: "254685223277",
  appId: "1:254685223277:web:36e5e792ece6e0e5cc2264",
  measurementId: "G-LWH7KWN7Q8"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export default firebase;
