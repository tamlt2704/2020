import React, {Component} from 'react';

class Counter extends Component {
    render() {
        return (
            <div className="container">
                <button 
                    onClick={this.props.decreaseCount}
                    className="buttons">
                   - 
                </button>
                <span>{this.props.countValue}</span>
                <button 
                    onClick={this.props.increaseCount}
                    className="buttons">
                   + 
                </button>
            </div>
        );
    }
}

export default Counter;
