import React from 'react';
import LoginForm from '../login-form/login-form';
import WelcomePage from '../welcome-page/welcome-page';
import { LoginService } from '../../services/login-service';
import './App.css';

class App extends React.Component{

  state = {
    loginFormError:'',
    tryingUser:{
    },
    connectedUser:{
    }
  }
  
  
  doLogin = tryingUser =>{
    LoginService.logIn(tryingUser.email, tryingUser.password)
    .then((userCredential) => {

      let connectedUser = userCredential.user;
      this.setState({
        connectedUser:connectedUser,
        loginFormError: null
      })
      this.render();

    })
    .catch((error) => {
        this.setState({
            loginFormError: "Email or password are incorrects"
          })
        this.render();
    });
  }

  logOut = () =>{
    LoginService.logOut().then(() => {
        this.setState({
            connectedUser:{}
          })
        this.render();
    }).catch((error) => {
    })
  }

    render() {
      return(
        <React.Fragment>
            <div id="content">
            </div>
            <div id="rscontent">

            </div>
            <div id="mcontent">
                {LoginService.isActiveSession() ? <WelcomePage
                                                connectedUser={this.state.connectedUser}
                                                logOut={this.logOut}/> 
                                                
                                                :

                                                <LoginForm
                                                doLogin={this.doLogin}
                                                loginFormError = {this.state.loginFormError}   
                                                /> }
            </div>
            <div id="lscontent"></div>
        </React.Fragment>
      )
    }
    
}

export default App;
