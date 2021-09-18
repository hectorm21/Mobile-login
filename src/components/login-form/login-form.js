import React from "react";
//import InputField from "../input-field/input-field";
//import CustomButton from "../button/button";
//import propTypes from "prop-types";
class LoginForm extends React.Component{

    emailRef = React.createRef();
    passwordRef = React.createRef();
    login = (event) => {
        event.preventDefault();  
        console.log("props",this.props);
        const tryingUser = {
            email:this.emailRef.current.value,
            password:this.passwordRef.current.value
        }
        this.props.doLogin(tryingUser);
        event.currentTarget.reset();
    }

    render() {
        return(
            <React.Fragment>
                <form className="" onSubmit={this.login}>
                    <input
                        ref={this.emailRef}
                        type="email"
                        name=""
                        placeholder="Email"
                        required/>
                    <input
                        ref={this.passwordRef}
                        type="password"
                        name="password"
                        placeholder="********"
                        required/>

                    {this.props.loginFormError ? <div className="error">{this.props.loginFormError}</div> : "" }

                    <input
                        type="submit"
                        name="loginSubmit"
                        value="Log in"
                        id="loginSubmit"/>
                </form>
            </React.Fragment>
        )
    }
}
export default LoginForm;