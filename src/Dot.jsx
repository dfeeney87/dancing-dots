import React, { Component, Fragment } from 'react'
import Snap from 'snapsvg-cjs';

export default class Dot extends Component {
    dotRender() {
        console.log(this.svgCircle)
        // const element = Snap(this.svgCircle);

    }
    componentDidMount() {
        this.dotRender();
    }

    componentDidUpdate() {
        this.dotRender();
    }
    render() {
        console.log(this.props);
        const plot = this.props.plot;
        const x = plot[0];
        const y = plot[1];
        return (
            <Fragment>
                <circle ref={d=>this.svgCircle=d} r={10} cx={x} cy={y} fill={'#A7F432'} />
            </Fragment>
        )
    }
}