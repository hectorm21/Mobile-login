import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAIJPOyPQLhf9fehpcF2HHpUmyW-aNcBiU",
    authDomain: "loginapp-9b3e6.firebaseapp.com",
    projectId: "loginapp-9b3e6",
    storageBucket: "loginapp-9b3e6.appspot.com",
    messagingSenderId: "751348744351",
    appId: "1:751348744351:web:b825edc28aef725f4f22aa"
  };
  
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

 class LoginService {

    static createUser = (userEmail, password) => {
        
        createUserWithEmailAndPassword(auth, userEmail, password)
        .then((userCredential) => {
            console.log("usuario creado");
        })
        .catch((error) => {
            console.log("error al crear usuario");
        });
    }


     static logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    static logOut = () => {
        return signOut(auth);
    }

    static isActiveSession = () => {
        return getAuth().currentUser == null ? false : true;
    }
    static lastSignIn = () => {
        return auth.currentUser.metadata.lastLoginAt//.lastSignInTime //Sat, 18 Sep 2021 14:17:28 GMT
                                        //lastLoginAt // 1631974648950
    }
}
export { LoginService };


