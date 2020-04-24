import React, {Component} from 'react';
import './MenuButton.css';


class MenuButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button
                id="roundButton"
                onMouseDown={this.props.handleMouseDown}
            >
            </button>
        );
    }
}
export default MenuButton;

