import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

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
  
  // Initialize Firebase App
  const firebaseApp = initializeApp(firebaseConfig);

  // Initialize google provide
  const provider = new GoogleAuthProvider();

  // setting custom parameter 
  provider.setCustomParameters = ()=>(
    {
        prompt: 'select_account',
    }
  )

  // exporting
  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);

  const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth)=>{
    if (!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    // fetching data
    const userSnapShot = await getDoc(userDocRef);

    // if user does not exist in the db
    if (!userSnapShot.exists()){

      // getting data and created date
      const {displayName, email } = userAuth;
      const createDate = new Date();

      try{
        // setting user data on firestore
        await setDoc(userDocRef, {
          displayName,
          email,
          createDate,
        });
      }
      catch(err){
        console.log('error creating the user: ',err);
      }
    }

    return userDocRef;

  }

  export const createAuthUserWithEmailAndPassword = async (auth, email, password)=>{
    if (!email || !password) return;

    return await createAuthUserWithEmailAndPassword(auth, email, password);
  }


