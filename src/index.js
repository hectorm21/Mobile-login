import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/login-form/login-form';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIJPOyPQLhf9fehpcF2HHpUmyW-aNcBiU",
  authDomain: "loginapp-9b3e6.firebaseapp.com",
  projectId: "loginapp-9b3e6",
  storageBucket: "loginapp-9b3e6.appspot.com",
  messagingSenderId: "751348744351",
  appId: "1:751348744351:web:b825edc28aef725f4f22aa"
};


const app = initializeApp(firebaseConfig);
/*const auth = getAuth();
createUserWithEmailAndPassword(auth, "hectorm21@live.com", "abc123")
  .then((userCredential) => {
    // sesion iniciada
    console.log(userCredential.user);
  })
  .catch((error) => {
    console.log(error);
  });
*/
class App extends React.Component{
  state = {
    tryingUser:{
    },
    connectedUser:{
    }
  }
  doLogin = tryingUser =>{

    console.log(tryingUser);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, tryingUser.email, tryingUser.password)
      .then((userCredential) => {
        console.log("sesion iniciada", userCredential.user);
        console.log("state", this.state);
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });




  }
    constructor(){
        super()

    }
    render() {
      return(
        <LoginForm doLogin={this.doLogin}/>
      )
    }
    
}


ReactDOM.render(<App/>, document.getElementById('main')); 
