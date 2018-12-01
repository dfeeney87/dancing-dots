import React, { Fragment, Component } from 'react';
import App from './App'

import {Route, Link} from 'react-router-dom';
import ViewPort from './ViewPort';
import Confused from './Confused';

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
                <Route exact path={'/'} component={Confused}/>
                <Route path={'/dotFactory'} component={ViewPort}/>
                </main>
         </Fragment>
)}
}