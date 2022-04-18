import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCCq14Ow0ZKnladRjM5ThQthwxGwqaDDSU",
  authDomain: "mario-plan-project-29f2a.firebaseapp.com",
  projectId: "mario-plan-project-29f2a",
  storageBucket: "mario-plan-project-29f2a.appspot.com",
  messagingSenderId: "430991102848",
  appId: "1:430991102848:web:3af0a492a94686eb0aa765",
  measurementId: "G-X7PFX0H7FH"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase;