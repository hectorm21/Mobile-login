import React from 'react' ;
import DigitDisplay from '../digit-display/digit-display' ;
import './welcome-page.css' ;
import '../App/App.css' ;

class WelcomePage extends React.Component{

    logOut = (event) => {
        event.preventDefault() ;  
        this.props.logOut() ;
    }
 
    refreshClock = () => {
        this.props.refreshClock()
    }

    componentDidMount() {
        this.interval = setInterval( () => {
            [this.refreshClock()]
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval) ;
    }

    render() {
        return(
            <React.Fragment>
                
                <p className = 'welcomeText'>WELCOME!</p>
                <p className = 'welcomeMessage'>the last time you accesed was</p>
                <div className = 'clockContainer'>
                    <DigitDisplay text = 'days' digits = {this.props.time.days}></DigitDisplay>
                    <DigitDisplay text = 'hours' digits = {this.props.time.hours}></DigitDisplay>
                    <DigitDisplay text = 'minutes' digits = {this.props.time.mins}></DigitDisplay>
                    <DigitDisplay text = 'seconds' digits = {this.props.time.secs}></DigitDisplay>
                </div>
                <div>
                    <button name = 'loginSubmit'
                            value = 'Log in'
                            id = 'loginSubmit'
                            onClick = {this.props.logOut}>LOGOUT
                    </button>
                </div>

            </React.Fragment>
        )
    }
}


export default WelcomePage;