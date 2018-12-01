import React, { Component } from 'react';
import Dot from './Dot';

class ViewPort extends Component  {
    constructor() {
        super()
        this.state = {
            plotMe: [500,500]
        }
    }
    componentDidMount() {
        const self = this;
        setInterval(function () {
            const maxX = 990;
            const min = 10;
            const maxY = 590;
            const x = Math.floor(Math.random()*(maxX-min)+min);
            const y = Math.floor(Math.random()*(maxY-min)+min);
            self.setState({plotMe: [x, y]});
        }, 1000);
    }
    render() {
        console.log(this.state.plotMe)
        return (
        <svg height={600} width={1000}>
            <rect height={590} width={990} x={10} y={10} fill={'orchid'} />
            <Dot plot={this.state.plotMe}/>
        </svg>
    )}
}

export default ViewPort;