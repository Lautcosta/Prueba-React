// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyACCCshaZI3LqUXLD7xImgS60DSKWGG56M",
  authDomain: "react-coder-4a25b.firebaseapp.com",
  projectId: "react-coder-4a25b",
  storageBucket: "react-coder-4a25b.appspot.com",
  messagingSenderId: "14264727841",
  appId: "1:14264727841:web:9c59e7064718556f1aa660"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp=() =>{ 
    return app
}
    
