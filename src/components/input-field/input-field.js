import React from "react";
import {render} from 'react-dom';

class InputField extends React.Component {

    inputRef = React.createRef();
    render() {
        return <input type={this.props.type} ref ={this.inputRef} name={this.props.name} placeholder={this.props.placeholder} required={this.props.required}/>
    }
}

export default InputField; 