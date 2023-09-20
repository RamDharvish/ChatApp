import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGl2Ojx_jM_mTZmSCC6TOHJKmuXS2WUV8",
  authDomain: "chat-app-9e865.firebaseapp.com",
  projectId: "chat-app-9e865",
  storageBucket: "chat-app-9e865.appspot.com",
  messagingSenderId: "191576917783",
  appId: "1:191576917783:web:fb4ed905ff9924c7e15952",
  measurementId: "G-KJRE9MMB59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
