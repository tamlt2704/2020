import React, {Component} from 'react';
import logo from './logo.svg';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSortUp} from '@fortawesome/free-solid-svg-icons'
 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class TimerDashboard extends Component {
    render() {
        return (
            <div>
                <EditableTimerList />
                <ToogleableTimerForm />
            </div>
        );
    }
}

class EditableTimerList extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}

class ToogleableTimerForm extends Component {
    render() {
        return (
            <div>
            </div>
        )
    }
}


function App() {
  return (
    <div className="App">
        <TimerDashboard />
    </div>
  );
}

export default App;
