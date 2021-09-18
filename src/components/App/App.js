import React from 'react';
import LoginForm from '../login-form/login-form';
import WelcomePage from '../welcome-page/welcome-page';
import { LoginService } from '../../services/login-service';

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

      let connectedUser = {...this.state.connectedUser};
      connectedUser = userCredential.user;
      this.setState({
        connectedUser:connectedUser,
        loginFormError: null
      })
      console.log("state", this.state);
      this.render();

    })
    .catch((error) => {
        this.setState({
            loginFormError: "email or password are incorrects"
          })
        console.log("state", this.state);
        this.render();
      console.log("error iniciar sesion")
    });
  }

  logOut = () =>{
    LoginService.logOut().then(() => {
        this.setState({
            connectedUser:{}
          })
        console.log("sesion cerrada");
        this.render();
    }).catch((error) => {
        console.log("error al cerrar sesion");
    })
  }

    render() {

      return(
        <React.Fragment>
            {LoginService.isActiveSession() ? <WelcomePage
                                            connectedUser={this.state.connectedUser}
                                            logOut={this.logOut}/> 
                                            
                                            :

                                            <LoginForm
                                            doLogin={this.doLogin}
                                            loginFormError = {this.state.loginFormError}   
                                            /> }
        </React.Fragment>
      )
    }
    
}

export default App;
