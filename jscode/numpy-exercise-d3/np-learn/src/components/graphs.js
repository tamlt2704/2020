import React, {Component} from 'react';

import {v4 as uuidv4} from 'uuid';
import {lorem} from 'faker';

// d3
import {scaleLinear} from 'd3-scale';
import {max} from 'd3-array';
import {select} from 'd3-selection';
import 'd3-transition';
import {timer} from 'd3-timer';

class EX1 extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.createChart();
    }

    createChart = () => {
        const node = this.node;
        select(node)
            .append('text')
            .attr('y', 50)
            .text('hello')
            .attr('fill', 'green')
            .transition()
            .duration(500)
            .attrTween('text', function() {
                return function(t) {
                    var solution = 'import numpy as';
                    var progress = Math.floor(t * 100);
                    console.log(t);
                    console.log(progress);
                    var percent = progress * solution.length / 100;
                    select(this).text(solution.substring(0, percent));
                    
                    if (progress === 100) {
                        select(node).append('text')
                                    .attr('class', 'blink-text')
                                    .attr('y', 50)
                                    .attr('x', 125)
                                    .text('np')
                                    .attr('fill', 'green');
                    }
                }
            })

    }

    render() {
        return (
            <div>
                <svg 
                    ref={node => this.node = node}
                    width={800}
                    height={500}
                >
                </svg>
            </div>
        );
    }
}

class EX2 extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.createChart();
    }


    createChart = () => {
        const node = this.node;
        var zeroData = Array(10).fill('0.');
        
        /*select(node)
            .selectAll('rect')
            .data([1,2,3])
            .enter()
            .append('rect')
            .attr('x', (d, i) => d * 25)
            .attr('y', (d, i) => d)
            .attr('height', (d, i) => 0)
            .attr('width', (d, i) => d)
            .attr('fill', 'green')
            .transition()
            .duration(500)
            .attr('height', (d, i) => d*100)
            .attr('fill', 'black')
            */
        var boxWidth = 50;
        var boxHeight = 50;
        var boxPadding = 5;
        var rects = select(node)
            .selectAll('rect')
            .data(zeroData)
            .enter()
            .append('rect')
            .attr('width', 0)
            .attr('id', function(d, i) {
                return 'rect-'+i;
            })
            .attr('height', 0)
            .attr('x', 0)
            .attr('y', 0);
        
        var ids = {};
        var t = timer(function(elapsed) {

            if (elapsed > 100 * zeroData.length) {
                t.stop();
            }

            var boxIdNeedUpdate = Math.floor(elapsed/100);
            console.log(boxIdNeedUpdate);
            if (boxIdNeedUpdate in ids) {

            } else {
                console.log('need update');
                ids[boxIdNeedUpdate] = boxIdNeedUpdate;
                select('#rect-'+boxIdNeedUpdate)
                    .transition()
                    .duration(80)
                    .attr('fill', 'green')
                    .attr('x', function() {
                        return boxIdNeedUpdate * (boxWidth + boxPadding);
                    })
                    .attr('y', 50)
                    .attr('width', 50)
                    .attr('height', 50)
                
                if (boxIdNeedUpdate < zeroData.length) {
                select(node)
                    .append('text')
                    .text('0.')
                    .attr('x', function() {
                        return boxIdNeedUpdate * (boxWidth + boxPadding) + 20;
                    })
                    .attr('y', 85);
                }
            }


            if (Math.floor(elapsed) % 300 === 0) {
                console.log('need update');
            }
        }, 100);

    }

    render() {
        return (
            <div>
                <svg 
                    ref={node => this.node = node}
                    width={800}
                    height={500}
                >
                </svg>
            </div>
        );
    }
}


export {
    EX1,
    EX2,
};
