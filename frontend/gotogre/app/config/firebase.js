
import firebase, { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const FIREBASE_CONFIG= {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     //databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
//   };


const FIREBASE_CONFIG = {
  apiKey: "AIzaSyC0RqC9xboA2TsNrRm1f9Ts6ux5WfIUmJY",
  authDomain: "gotogre-763f9.firebaseapp.com",
  projectId: "gotogre-763f9",
  storageBucket: "gotogre-763f9.appspot.com",
  messagingSenderId: "102247631259",
  appId: "1:102247631259:web:b8f27c0aee1a223951793e"
}
  
  var app = initializeApp(FIREBASE_CONFIG);
  export const auth = getAuth(app);
  export default app
