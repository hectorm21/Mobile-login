import React from "react";
import { LoginService } from '../../services/login-service';
import { HelpersService } from '../../helpers/helpers';
import DigitDisplay from '../digit-display/digit-display'
import './welcome-page.css';
import '../App/App.css';

class WelcomePage extends React.Component{

    logOut = (event) => {
        event.preventDefault();  
        this.props.logOut();
    }

    lastSignIn = HelpersService.timeSinceLastSignin();
    render() {
        return(
            <React.Fragment>

                <p className="welcomeText">WELCOME!</p>
                <p className="welcomeMessage">the last time you accesed was</p>
                <div className="clockContainer">
                    <DigitDisplay text="days" digits={this.lastSignIn.days}></DigitDisplay>
                    <DigitDisplay text="hours" digits={this.lastSignIn.hours}></DigitDisplay>
                    <DigitDisplay text="minutes" digits={this.lastSignIn.mins}></DigitDisplay>
                    <DigitDisplay text="seconds" digits={this.lastSignIn.secs}></DigitDisplay>
                </div>
         <div>
                    <button name="loginSubmit"
                            value="Log in"
                            id="loginSubmit"
                            onClick={this.props.logOut}>LOGOUT
                    </button>
                    </div>

            </React.Fragment>
        )
    }
}


export default WelcomePage;