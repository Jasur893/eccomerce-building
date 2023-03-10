import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCDCHGV37TuGZl2t4AzMSzLVyrddr-cDRo",
  authDomain: "eccomerce-20117.firebaseapp.com",
  projectId: "eccomerce-20117",
  storageBucket: "eccomerce-20117.appspot.com",
  messagingSenderId: "634710210899",
  appId: "1:634710210899:web:767a823c123645d8a189a6"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)