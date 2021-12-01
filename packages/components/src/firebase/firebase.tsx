import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCzO_ETR9augvKJ40__UDqV_HaQItuwq1I",
  authDomain: "bolyais-app.firebaseapp.com",
  databaseURL: "https://bolyais-app.firebaseio.com",
  projectId: "bolyais-app",
  storageBucket: "bolyais-app.appspot.com",
  messagingSenderId: "303318641764",
  appId: "1:303318641764:web:1684b3e2b72cbbc5ee4371",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const appDatabase = firebase.database();
const appFirebase = firebase.firestore();
export const getDatabase = () => appDatabase;
export const getFirestore = () => appFirebase;
