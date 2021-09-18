import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/login-form/login-form';
import { initializeApp } from "firebase/app";
//import * as firebase from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import WelcomePage from './components/welcome-page/welcome-page';

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

    console.log("entra en index.js");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, tryingUser.email, tryingUser.password)
      .then((userCredential) => {
        let connectedUser = {...this.state.connectedUser};
        connectedUser = userCredential.user; 
        this.setState({
          connectedUser:connectedUser
        })
        ReactDOM.render(<WelcomePage connectedUser={this.state.connectedUser}/>, document.getElementById('main'));  
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
      let isSigned = getAuth().currentUser == null ? true : false;
      console.log(isSigned);
      console.log(getAuth().currentUser);
      return(
        <React.Fragment>
          {isSigned ? <LoginForm doLogin={this.doLogin}/> : <WelcomePage connectedUser={this.state.connectedUser}/> }
        </React.Fragment>
      )
    }
    
}


ReactDOM.render(<App/>, document.getElementById('main')); 
