import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBq1l-YnMpiLeouUeSVFLUsHrtHws_YgCo",
  authDomain: "web-culture.firebaseapp.com",
  projectId: "web-culture",
  storageBucket: "web-culture.appspot.com",
  messagingSenderId: "168750875502",
  appId: "1:168750875502:web:d0a839ced828347d7a777f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
