// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnSabUEma1xUqmGm9YlzncfcAUHyXFiZw",
  authDomain: "trip-memorize.firebaseapp.com",
  projectId: "trip-memorize",
  storageBucket: "trip-memorize.appspot.com",
  messagingSenderId: "810089176282",
  appId: "1:810089176282:web:665b22d1ba82533325d9e3",
  measurementId: "G-861T50RE73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// export const imagesRef = ref(storage, "images");
