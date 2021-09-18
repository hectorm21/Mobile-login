import React from "react";

class WelcomePage extends React.Component{

    logOut = (event) => {
        event.preventDefault();  
        console.log("log out in component");
        this.props.logOut();
    }
    //user.metadata.lastSignInTime

    render() {
        return(
            <React.Fragment>
                <h1>WELCOME!</h1>
                <div>
                    <button name="loginSubmit"
                            value="Log in"
                            id="loginSubmit"
                            onClick={this.props.logOut}>Log out
                    </button>
                </div>
            </React.Fragment>
        )
    }
}


export default WelcomePage;