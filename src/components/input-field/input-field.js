import React from "react";
import {render} from 'react-dom';

class InputField extends React.Component {
    render() {
        return <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} id= {this.props.id} required={this.props.required}/>
    }
}

export default InputField;