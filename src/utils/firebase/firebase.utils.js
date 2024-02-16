import { initializeApp } from 'firebase/app';
import { signOut, getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';

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
  
  // adding collections to the fire store db
  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{
    const collectionRef = collection(db, collectionKey);

    const batch = writeBatch(db);

    objectsToAdd.forEach((object)=>{
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });

    await batch.commit();
    console.log("done");
  };

  export const getCategoriesAndDocuments = async ()=>{
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapShot = await getDocs(q);
    const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot)=>{
      const {title, items} = docSnapShot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});

    return categoryMap;
  }

  // creating use documents and user data
  export const createUserDocumentFromAuth = async (userAuth, additionInformation = {})=>{
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    //console.log(userDocRef);

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
          ...additionInformation,
        });
      }
      // catching error if there is any
      catch(err){
        console.log('error creating the user: ',err);
      }
    }

    return userDocRef;

  }

  // creating user sign up with email and password
  export const createAuthUserWithEmailAndPassword = async (email, password)=>{
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  // singing in with email and password
  export const signInAuthWithEmailAndPassword = async (email, password)=>{
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  }

  // sign out user
  export const signOutUser = async ()=>{
    await signOut(auth);
  }

  // on auth state change
  export const onAuthStateChangedListener = (callback)=>{
    onAuthStateChanged(auth, callback);
  }

