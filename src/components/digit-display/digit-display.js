import React from "react";
import {render} from 'react-dom';
import './digit-display.css';

class DigitDisplay extends React.Component {

    render() {
        return(
            <div className="displayDigitsContainer">
                <div className="digits">{this.props.digits}</div>
                <div className="digitText">{this.props.text}</div>
            </div>
        )
    }
}

export default DigitDisplay; 