import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6YXSWoM54Mr6Uj6CX3z9OGTokeb20dws",
  authDomain: "chat-1c7e0.firebaseapp.com",
  projectId: "chat-1c7e0",
  storageBucket: "chat-1c7e0.appspot.com",
  messagingSenderId: "793631268148",
  appId: "1:793631268148:web:2f6418e48c577d0a575961"
};

export const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);