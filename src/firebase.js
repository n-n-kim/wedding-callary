import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "API_KEY_CỦA_BẠN",
  authDomain: "tantram-wedding.firebaseapp.com",
  projectId: "tantram-wedding",
  storageBucket: "tantram-wedding.firebasestorage.app",
  messagingSenderId: "385379905617",
  appId: "APP_ID_CỦA_BẠN",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();