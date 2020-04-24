import React from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
import Counter from './Counter';


//Map redux state to component props
function mapStateToProps(state) {
    return {
        countValue: state.count
    }
}

//Actions
var increaseAction = {type: "increase"};
var decreaseAction = {type: "decrease"};

// Map redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        increaseCount: function() {
            return dispatch(increaseAction);
        },
        decreaseCount: function() {
            return dispatch(decreaseAction);
        }
    }
}

var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
export default connectedComponent;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//export default App;
