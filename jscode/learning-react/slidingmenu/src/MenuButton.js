import React, {Component, PureComponent} from 'react';
import './MenuButton.css';


class MenuButton extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Menu button render method');
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

