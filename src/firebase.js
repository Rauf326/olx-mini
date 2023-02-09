import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDACLGp3cKwY1ZWsPGHHjQTibotlbN8QL8",
    authDomain: "olx-mini-2ed0c.firebaseapp.com",
    projectId: "olx-mini-2ed0c",
    storageBucket: "olx-mini-2ed0c.appspot.com",
    messagingSenderId: "486326027737",
    appId: "1:486326027737:web:3634f26450fd89f20545c8",
    measurementId: "G-TTPN3NP80R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app , auth};

