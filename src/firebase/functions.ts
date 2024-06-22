"use server";

import {
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./configure";

export const GET_PUBLICK = async (endpoint: string) => {
  const querySnapshot = await getDocs(collection(db, endpoint));
  const data = querySnapshot.forEach((doc) => {
    if (doc.data().preview) {
      return { id: doc.id, ...doc.data() };
    }
  });
  return data;
};

export const POST = async (endpoint: string, obj: any) => {
  const docRef = await setDoc(doc(db, endpoint, obj.id), obj);
  return GET_PUBLICK(endpoint);
};

export const PATCH = async (endpoint: string, obj: any) => {
  const washingtonRef = doc(db, endpoint, obj.id);
  await updateDoc(washingtonRef, obj);
};

export const GET = async (endpoint: string) => {
  const querySnapshot = await getDocs(collection(db, endpoint));
  const data = querySnapshot.forEach((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return data;
};
