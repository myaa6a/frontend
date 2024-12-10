import { initializeApp } from 'firebase/app'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBLWmj1Sz79jhmSTW7m32XTrG4RUkn4o1M",
    authDomain: "frontend-acfd9.firebaseapp.com",
    projectId: "frontend-acfd9",
    storageBucket: "frontend-acfd9.firebasestorage.app",
    messagingSenderId: "361392187956",
    appId: "1:361392187956:web:07261ef9f9463029fcb861",
    measurementId: "G-BN4YQ6C51R"
  });
}

const firebaseApp = initializeApp(config)

export default firebaseApp