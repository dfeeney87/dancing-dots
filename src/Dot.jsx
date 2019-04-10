import React, { Component } from 'react'
import Snap from 'snapsvg-cjs';

export default class Dot extends Component {
    svgCircle = {};
    svgText = {};
    dotRender(first, last, index) {
        //return;
        const startDot = {
            opacity: 1,
            r: 30
        };
        const endDot = {
            r: 10,
            opacity: 0,
        };

        const firstText = {};
        const lastText = {};

        if (first && last) {
            Object.assign(startDot, {cx: first[0],
                cy: first[1]});
            Object.assign(endDot, {cx: last[0],
                cy: last[1]});

            Object.assign(firstText, {x: first[0]-5,
                y: first[1]+5});
            Object.assign(lastText, {x: last[0]-5,
                y: last[1]+5});

        }
        const idElement = Snap(this.svgCircle[index]);
        const idTextElement = Snap(this.svgText[index]);
        idElement.attr(startDot);
        idElement.animate(endDot, 2000);
        idTextElement.attr(firstText);
        idTextElement.animate(lastText, 2000);

    }
    componentDidMount() {
        this.dotRender();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.plot !== this.props.plot) {
            prevProps.plot.forEach((arrayOfPrevPlotXYs, index) => {
                const lastArray = this.props.plot[index];
                const firstPlot = [arrayOfPrevPlotXYs[0], arrayOfPrevPlotXYs[1]];
                const lastPlot = [lastArray[0], lastArray[1]];
                this.dotRender(firstPlot, lastPlot, index);
            })
        }
    }

    render() {
        return (
        <g>
        {this.props.plot.map(
            (plot, index) => {
        const x = plot[0];
        const y = plot[1];
        return (
            <g key={index} >
                <circle ref={d=>this.svgCircle[index]= d} 
                        className={`${index}-circle`} 
                        id={index} 
                        cx={x} 
                        cy={y} 
                        r={30} 
                        fill={'#A7F432'} />
                <text   ref={d=>this.svgText[index]= d}
                        font={'italic 13px sans-serif'} 
                        fill={'#319177'} 
                        x={x-5} 
                        y={y+5} >{index}</text>
            </g>
        )})}
        </g>)

    }
}