import { initializeApp } from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = initializeApp( {
    apiKey: "AIzaSyBjOQi-QjqX3rmN3XZJaoekUN0sf0ll3ZQ",
    authDomain: "todo-70644.firebaseapp.com",
    projectId: "todo-70644",
    storageBucket: "todo-70644.appspot.com",
    messagingSenderId: "301650164266",
    appId: "1:301650164266:web:237cf4ec14dee76b72e153",
    measurementId: "G-7X6ETJPBM4"
});

export const db = app.database();
export const namesRef = db.ref(`todos`);