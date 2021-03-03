// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBF0CKWPOcceByeU2QgUnTnb3Mh23c_46Q",
  authDomain: "whatsapp-clone-81f8a.firebaseapp.com",
  projectId: "whatsapp-clone-81f8a",
  storageBucket: "whatsapp-clone-81f8a.appspot.com",
  messagingSenderId: "100452950514",
  appId: "1:100452950514:web:b35dc98d893342ddfc8b6b",
  measurementId: "G-QZYR2HMYP4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;     