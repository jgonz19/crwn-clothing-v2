import { initializeApp } from "firebase/app"; // initializeApp create the instance for based on configuration
import { getAuth, 
         //signInWithRedirect, 
         signInWithPopup,
         GoogleAuthProvider,
         signInWithEmailAndPassword,
         createUserWithEmailAndPassword,
         //sendPasswordResetEmail
         signOut,
         onAuthStateChanged,//this method will give us back a listener, to prove if you r logged in or not
        } from "firebase/auth";  //authentication package come with firebase package
import {
        getFirestore,
       
        doc, 
        getDoc,
        setDoc } from "firebase/firestore";
        //import some methods, getFirestore to instatiate
        //doc to retrieve the docs instance
        //getDoc to access the data
        //to set the the data is setDoc


const firebaseConfig = {
    apiKey: "AIzaSyABpgwUmMtSSecZtmGn6EdRJE3dUnWIavc",
    authDomain: "crwn-clothing-v2-b8d48.firebaseapp.com",
    projectId: "crwn-clothing-v2-b8d48",
    storageBucket: "crwn-clothing-v2-b8d48.appspot.com",
    messagingSenderId: "702774082872",
    appId: "1:702774082872:web:24f8a4354ecd80442315cd",
    measurementId: "G-1N0GV1H6T8"
  };


  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();//class we get from google authentication(auth)
  provider.setCustomParameters({ //multiple provider are possible due to kind of sigin(popup/signInWithRedirect)
    prompt: "select_account",
  });


export const auth = getAuth(); // it should be the same auth for any website/app
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return; 
    const userDocRef = doc(db, 'users', userAuth.uid);// doc takes 3 argument(database, collection,identifier(id))
    const userSnapshot = await getDoc(userDocRef);//we are fetching the data with this syntaxis
    //if data exits
    //return userDochref
    //if does not exists, we need to create
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInformation
            })
        }catch(err){
            console.log('error creating the user', err.message);
        }
    }

    return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

