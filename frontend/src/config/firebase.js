import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" 

const firebaseConfig = {
  apiKey: "AIzaSyD-gP7kcV6tegbBPasZDO744lwWrZ8_Xm8",
  authDomain: "portfolio-bcddc.firebaseapp.com",
  projectId: "portfolio-bcddc",
  storageBucket: "portfolio-bcddc.firebasestorage.app",
  messagingSenderId: "77856104047",
  appId: "1:77856104047:web:20c3340e3d5324d0f0379a",
  measurementId: "G-QRQB9SD95C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth