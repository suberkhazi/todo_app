import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyARJpia1gftRf0wb5qNJNPLLnW3jguYS38",
   authDomain: "todo-app-cp-fcd24.firebaseapp.com",
   projectId: "todo-app-cp-fcd24",
   storageBucket: "todo-app-cp-fcd24.appspot.com",
   messagingSenderId: "215609849514",
   appId: "1:215609849514:web:4b7ad5ecfd59619dcd02d3",
   measurementId: "G-8WGHWNS090"
 });

 
 const db = firebaseApp.firestore();

 export default db;