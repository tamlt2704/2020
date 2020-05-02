import React, {Component} from 'react';
import logo from './logo.svg';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSortUp} from '@fortawesome/free-solid-svg-icons'
 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Seed from './Seed';

class TimerDashboard extends Component {
    render() {
        return (
            <div>
                <EditableTimerList />
                <ToogleableTimerForm 
                    isOpen={true}
                />
            </div>
        );
    }
}

class EditableTimerList extends Component {
    state = {
        timers: Seed.timers
    }

    render() {
        const timerList = this.state.timers.map((timer) => (
            <EditableTimer {...timer}/>
        ));
        return (
            <div id='timers'>
                {timerList}
            </div>
        )
    }
}

class EditableTimer extends Component {
    render() {
        if (this.props.editFormOpen) {
            return (<TimerForm {...this.props} />)
        } else {
            return (<Timer {...this.props} /> )
        }
    }
}

class TimerForm extends Component {
    render() {
        const submitText = this.props.title ? 'Update' : 'Create';
        return (
            <div className='timer-form'>
                Title: <input type="text" defaultValue={this.props.title} /> <br/>
                Project: <input type="text" defaultValue={this.props.project} /> <br/>
                <div className='btn btn-primary'> {submitText} </div>
                <div className='btn btn-danger'> Cancel </div>
            </div>
        )
    }
}

class Timer extends Component {
    render() {
        const elapsedString = this.props.elapsed;
        return (
            <div className='timer-box'>
                <div>{this.props.title}</div>
                <div>{this.props.project}</div>
                <div>{elapsedString}</div>
                <div>Edit</div>
                <div>Delete</div>
                <div className='btn btn-primary'>Start</div>
            </div>
        )
    }
}

class ToogleableTimerForm extends Component {
    render() {
        if (this.props.isOpen) {
            return ( <TimerForm />);
        } else {
            return (
                <div>
                    <div className='btn btn-primary'>
                        Add
                    </div>
                </div>
            );
        }
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
