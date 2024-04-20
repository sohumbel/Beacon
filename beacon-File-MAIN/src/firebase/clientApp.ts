import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBG1k6KNJRTF33hkqIhP6rj6rkbZGuDBuc",
  authDomain: "beacon-d2566.firebaseapp.com",
  projectId: "beacon-d2566",
  storageBucket: "beacon-d2566.appspot.com",
  messagingSenderId: "1040463660916",
  appId: "1:1040463660916:web:2318fd68e69535324b4e21",
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
