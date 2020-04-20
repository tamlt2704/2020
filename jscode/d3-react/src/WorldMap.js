import React, {Component} from 'react';
import './App.css';
import worlddata from './world';
import {geoMercator, geoPath} from 'd3-geo';

class WorldMap extends Component {
    render() {
        const projection = geoMercator()
            .scale(120)
            .translate([430, 250]);
        const pathGenerator = geoPath().projection(projection);
        const countries = worlddata.features
            .map((d, i) => <path
                    key={"path"+i}
                    d={pathGenerator(d)}
                    className="countries"
                    style={
                        {
                            fill: this.props.colorScale(d.launchday),
                            stroke: "black",
                            strokeOpacity: 0.5
                        }
                    }
                />);
        return (
            <svg width={500} height={this.props.size[1]}>
                {countries}
            </svg>
        )
    }
}
export default WorldMap;
