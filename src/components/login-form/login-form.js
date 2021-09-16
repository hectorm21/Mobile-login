import React from "react";
import InputField from "../input-field/input-field";
/*

*/
class LoginForm extends React.Component{
    render() {
        return(
                <form className="">
                    <InputField type="text" id="userName" name="userName" placeholder="User name" required={true}/>
                    <InputField type="password" id="password" name="password" placeholder="********" required={true}/>
                </form>
        )
    }
}
export default LoginForm;