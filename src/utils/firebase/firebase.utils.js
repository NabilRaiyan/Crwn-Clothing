import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCl-kpxFMfeg8gzlJ5sE3WLDzXRCvkTXlU",
    authDomain: "crwn-clothing-db-aa551.firebaseapp.com",
    projectId: "crwn-clothing-db-aa551",
    storageBucket: "crwn-clothing-db-aa551.appspot.com",
    messagingSenderId: "26261116112",
    appId: "1:26261116112:web:fa0ceda0dac98210e57ad5"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  // Initialize google provide
  const provider = new GoogleAuthProvider();

  // setting custom parameter 
  provider.setCustomParameters = ()=>(
    {
        prompt: 'select_account',
    }
  )

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithGooglePopup(auth, provider);