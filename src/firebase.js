import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpL5c90vYYWE83kZJvu6cPAayY7_Ad9Mg",
  authDomain: "codeofclues.firebaseapp.com",
  projectId: "codeofclues",
  storageBucket: "codeofclues.firebasestorage.app",
  messagingSenderId: "59928485459",
  appId: "1:59928485459:web:9fec4fb55ed41efcaeb0a6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
