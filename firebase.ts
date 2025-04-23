import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyAfoarPgdcNda8jQ7snB3jiuYh9nNymM",
  authDomain: "pdf-to-ai-chat.firebaseapp.com",
  projectId: "pdf-to-ai-chat",
  storageBucket: "pdf-to-ai-chat.firebasestorage.app",
  messagingSenderId: "1053665058456",
  appId: "1:1053665058456:web:574d104a3ef88a686bfaed",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
