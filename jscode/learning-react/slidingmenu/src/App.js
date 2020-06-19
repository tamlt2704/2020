import React from 'react';
import {connect} from 'react-redux';
import Counter from './Counter';
import logo from './logo.svg';
import './App.css';
import MenuContainer from './MenuContainer';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <MenuContainer /> 
            </div>
        );
    }
}

export default App;
