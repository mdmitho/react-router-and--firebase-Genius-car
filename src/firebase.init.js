// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZWlsoVvI4Nk8vu4RoPj8Fjzj1G79wTeA",
  authDomain: "genius-car-services-48e13.firebaseapp.com",
  projectId: "genius-car-services-48e13",
  storageBucket: "genius-car-services-48e13.appspot.com",
  messagingSenderId: "257061675735",
  appId: "1:257061675735:web:0068da8dcafb86ccc48692"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default app