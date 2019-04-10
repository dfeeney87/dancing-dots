import React, { Fragment, Component } from 'react';
import {Route, Link} from 'react-router-dom';
import ViewPort from './ViewPort';
import Home from './Home';

export default class MyRouter extends Component {
    render() {
        return(
            <Fragment>
                <ul>
                    <li>
                        <Link to={'/'}> Home </Link>
                    </li>
                    <li>
                        <Link to={'/dotFactory'}> ViewPort </Link>
                    </li>
                </ul>
                <main>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/dotFactory'} component={ViewPort}/>
                </main>
         </Fragment>
)}
}