import React, {Component} from 'react';
import logo from './logo.svg';

import './App.css';

import BarChart from './BarChart';
import WorldMap from './WorldMap';
import worlddata from './world';

import {range, sum} from 'd3-array';
import {scaleThreshold} from 'd3-scale';
import {geoCentroid} from 'd3-geo';

const appData = worlddata.features.filter(
    d=>geoCentroid(d)[0] < -20
);

appData.forEach((d,i) => {
    const offset = Math.random();
    d.launchday = i;
    d.data = range(30)
        .map((p, q) => (q < i) ? 0 : Math.random() * 2 + offset);
});

class App extends Component {
    render() {
        const colorScale = scaleThreshold().domain([5, 10, 20, 30, 50])
            .range(['#75739F', '#5EAFC6', '#41A36B', '#93C464', '#FE9922']);
        return (
            <div className="App">
            <WorldMap
                colorScale={colorScale}
                data={appData}
                size={[500, 400]}
            />
            <BarChart 
                colorScale={colorScale}
                data={appData}
                size={[500, 500]}
            />
            
            </div>
        );
    }
}

export default App;
