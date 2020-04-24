import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import Stuff from './Stuff';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul>
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                            <NavLink to="/stuff">Stuff</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className='content'>
                        <Route exact path="/" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
