import React from "react";
import {render} from 'react-dom';

class CustomButton extends React.Component {
    render() {
        return <input type={this.props.type} name={this.props.name} value={this.props.value} id={this.props.id}/>
    }
}

export default CustomButton;