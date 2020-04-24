import React, {Component} from 'react';
import './Menu.css';

class Menu extends Component {
    render() {
        var visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return(
            <div 
                id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <h2>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Search</a>
                </h2>
            </div>
        );
    }
}

export default Menu;
