import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {v4 as uuidv4} from 'uuid';
import {lorem} from 'faker';

import {EX1, EX2} from './components/graphs';


/*
 npm  i -SE d3-scale d3-shape d3-svg-legend d3-array d3-geo d3-selection d3-transition d3-brush d3-axis
 */

class Exercise {
    constructor(id, description, lelel, solution) {
        this.id = id;
        this.description = description;
        this.level = lelel; //number of star: [1-3]
        this.solution = solution;
    }
}

/*var data = Array(10).fill(1).map((x, i) => {
    return new Exercise(
        i,
        lorem.slug(),
        Math.floor(Math.random() * 3),
        lorem.lines()
    );
});
*/

var data = [
    new Exercise(
        1, 'Import the numpy package under the name np',
        1,
        'import numpy as np'
    ),
    new Exercise(
        2, 'Create a null vector of size 10',
        1,
        'Z = np.zeros(10) \n print(Z)'
    )
];


class Menu extends Component {
    menuStyle = {
        float: 'left',
        height: '100%',
        border: '1px solid #f4f4f4',
        textAlign: 'left',
        display: 'inline',
    };
    
    onQuestionClick = (i) => {
        this.props.onQuestionChange(i);
    }


    render() {
        const questionList = this.props.data.map(d => 
            (
                <li 
                    className='menuListStyle'
                    key={d.id}
                    onClick={() => this.onQuestionClick(d.id)}
                >
                    {d.id}. {d.description}  ({d.level})
                </li>
            )
        );
        return (
            <div style={this.menuStyle}>
                {questionList}
            </div>
        );
    }
}

class MainArea extends Component {
    renderSwitch(param) {
        switch(param) {
            case 1:
                return (<EX1 />);
            case 2:
                return (<EX2 />);
            default:
                return (<EX1 />);
        }
    }

    getSolution(questionId) {
        var solution = data.filter(d => d.id == questionId)[0].solution;
        console.log(solution);
        return solution;
    }

    render() {
        return (
            <div>
            {this.renderSwitch(this.props.activeQuestionId)}
            <div>
                {this.getSolution(this.props.activeQuestionId)}
            </div>
            </div>
        );
    }
}

class App extends Component {
    state = {
        activeQuestionId : 1,
    }

    handleQuestionChange(i) {
        this.setState({
            activeQuestionId: i,
        });
    }

    onQuestionChange = (i) => {
        console.log(`main app click on question ${i}`);
        this.handleQuestionChange(i);
    }

    render() {
        return (
            <div className="App">
               <Menu 
                    data={data}
                    onQuestionChange={this.onQuestionChange}
                />
                <MainArea 
                    activeQuestionId = {this.state.activeQuestionId}
                />
            </div>
        );
    }
}

export default App;
