import React from "react";
import './login-form.css';
import '../App/App.css';
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
                <img src="img/candado.PNG" className="candado"></img>
                <form  onSubmit={this.login}>
                    <input
                        ref={this.emailRef}
                        type="email"
                        name=""
                        placeholder="Email"
                        required/>
                        <br/>
                    <input
                        ref={this.passwordRef}
                        type="password"
                        name="password"
                        placeholder="********"
                        required/>
                    <br/>
                    {this.props.loginFormError ? <div className="errorMessage">{this.props.loginFormError}</div> : "" }
                    <br/>
                    <input
                        type="submit"
                        className="loginButon"
                        name="loginSubmit"
                        value="Log in"
                        id="loginSubmit"/>
                </form>
            </React.Fragment>
        )
    }
}
export default LoginForm;