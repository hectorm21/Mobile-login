import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './components/login-form/login-form';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIJPOyPQLhf9fehpcF2HHpUmyW-aNcBiU",
  authDomain: "loginapp-9b3e6.firebaseapp.com",
  projectId: "loginapp-9b3e6",
  storageBucket: "loginapp-9b3e6.appspot.com",
  messagingSenderId: "751348744351",
  appId: "1:751348744351:web:b825edc28aef725f4f22aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

class App extends React.Component{
    constructor(){
        super()
        /*this.state{

        }*/
    }
}
ReactDOM.render(<LoginForm/>, document.getElementById('main')); 
