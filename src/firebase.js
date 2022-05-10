// import firebase from 'firebase';

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyBKcoE32BlFeffE6sjlCgKR5v37KFVTwGg",
//     authDomain: "disneyplus-2b68c.firebaseapp.com",
//     projectId: "disneyplus-2b68c",
//     storageBucket: "disneyplus-2b68c.appspot.com",
//     messagingSenderId: "55512103767",
//     appId: "1:55512103767:web:2b41b0fccb0d831ae71c12",
//     measurementId: "G-EG5QMXCPS5"
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };

// export default db;

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBKcoE32BlFeffE6sjlCgKR5v37KFVTwGg',
	authDomain: 'disneyplus-2b68c.firebaseapp.com',
	projectId: 'disneyplus-2b68c',
	storageBucket: 'disneyplus-2b68c.appspot.com',
	messagingSenderId: '55512103767',
	appId: '1:55512103767:web:2b41b0fccb0d831ae71c12',
	measurementId: 'G-EG5QMXCPS5',
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
