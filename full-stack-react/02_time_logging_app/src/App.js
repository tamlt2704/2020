import React, {Component} from 'react';
import logo from './logo.svg';
import {v4 as uuidv4} from 'uuid';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSortUp} from '@fortawesome/free-solid-svg-icons'
 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Seed from './Seed';

class TimerDashboard extends Component {
    state = {
        timers: Seed.timers
    }
    
    handleTrashClick = (timerId) => {
        this.deleteTimer(timerId);
    }

    deleteTimer = (timerId) => {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId),
        });
    }

    handleEditFormSubmit = (attrs) => {
        console.log('handle Edit form submit');
        console.log(attrs);
        this.updateTimer(attrs);
    }

    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project,
                    });
                } else {
                    return timer;
                }
            })
        });
    }

    handleCreateFormSubmit  = (timer) => {
        this.createTimer(timer);
    }

    createTimer = (timer) => {
        var t = {
            id: uuidv4(),
            title: timer.title,
            project: timer.project,
            elapsed: Math.floor(Math.random() * 10000000),
            runningSince:null,
            editFormOpen: false
        };
        t.key = t.id;

        this.setState({
            timers: this.state.timers.concat(t)
        });
    }
    
    render() {
        return (
            <div>
                <EditableTimerList 
                    timers={this.state.timers}
                    onFormSubmit={this.handleEditFormSubmit}
                    onTrashClick={this.handleTrashClick}
                />
                <ToogleableTimerForm 
                    onFormSubmit={this.handleCreateFormSubmit}
                    isOpen={true}
                />
            </div>
        );
    }
}

class EditableTimerList extends Component {
    render() {
        const timerList = this.props.timers.map((timer) => (
            <EditableTimer 
                key={timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                runningSince={timer.runningSince}
                onFormSubmit={this.props.onFormSubmit}
                onTrashClick={this.props.onTrashClick}
            />
        ));
        return (
            <div id='timers'>
                {timerList}
            </div>
        )
    }
}

class EditableTimer extends Component {
    handleEditClick = () => {
        this.openForm();
    }

    handleFormClose = () => {
        this.closeForm();
    }

    handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
    }

    closeForm = () => {
        this.setState({editFormOpen : false});
    }

    openForm = () => {
        this.setState({editFormOpen : true});
    }

    state = {
        editFormOpen: false
    }

    render() {
        if (this.state.editFormOpen) {
            return (
                <TimerForm 
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <Timer 
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    onEditClick={this.handleEditClick}
                    onTrashClick={this.props.onTrashClick}
                /> 
            );
        }
    }
}

class TimerForm extends Component {
    state = {
        title: this.props.title || '',
        project: this.props.project || '',
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    handleProjectChange = (e) => {
        this.setState({
            project: e.target.value
        });
    }
    
    handleSubmit = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.title,
            project: this.state.project
        });
    }

    render() {
        const submitText = this.props.title ? 'Update' : 'Create';
        return (
            <div className='timer-form'>
                Title: <input 
                            type="text" 
                            defaultValue={this.state.title} 
                            onChange={this.handleTitleChange}
                        /> <br/>
                Project: <input 
                            type="text" 
                            defaultValue={this.state.project} 
                            onChange={this.handleProjectChange}
                        /> <br/>
                <div 
                    className='btn btn-primary'
                    onClick={this.handleSubmit}
                > {submitText} </div>
                <div 
                    className='btn btn-danger'
                    onClick={this.props.onFormClose}
                > Cancel </div>
            </div>
        )
    }
}

class Timer extends Component {
    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id);
    }

    render() {
        const elapsedString = this.props.elapsed;
        return (
            <div className='timer-box'>
                <div>{this.props.title}</div>
                <div>{this.props.project}</div>
                <div>{elapsedString}</div>
                <div
                    onClick={this.props.onEditClick}
                    >Edit
                </div>
                <div
                    onClick={this.handleTrashClick}
                >Delete</div>
                <div className='btn btn-primary'>Start</div>
            </div>
        )
    }
}

class ToogleableTimerForm extends Component {
    state = {
        isOpen: false,
    }

    handleFormOpen = () => {
        this.setState({
            isOpen: true
        });
    }

    handleFormClose = () => {
        this.setState({
            isOpen: false
        });
    }

    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.setState({isOpen: false});
    }

    render() {
        if (this.state.isOpen) {
            return ( 
                <TimerForm 
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}
                />);
        } else {
            return (
                <div>
                    <div 
                        className='btn btn-primary'
                        onClick={this.handleFormOpen}
                    >
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
