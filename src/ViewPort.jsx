import React, { Component } from 'react';
import Dot from './Dot';

class ViewPort extends Component  {
    constructor() {
        super()
        this.state = {
            plotMe: [[500,250]
             ,[250, 150], [750,450], [800, 20], [130,450], [100,100], [50, 300], [200, 10]
        ]
        }
    }
    componentDidMount() {
        const self = this;
        setInterval(async function () {
            const newPlotMap = await self.state.plotMe.map((plot => {
                const maxX = 990;
                const min = 10;
                const maxY = 590;
                const x = Math.floor(Math.random()*(maxX-min)+min);
                const y = Math.floor(Math.random()*(maxY-min)+min);
                return [x, y];
            }))
            self.setState({plotMe: newPlotMap});

        }, 2000);
    }
    render() {
        return (
        <svg height={600} width={1000}>
            <rect height={590} width={990} x={10} y={10} fill={'orchid'} />
            <Dot plot={this.state.plotMe}/>
        </svg>
    )}
}

export default ViewPort;