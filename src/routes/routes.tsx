import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from '../home/home';

export default class Routes extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={()=>{return(<Home data={this.props.data}/>)}}/>
                </Switch>
            </HashRouter>
        );
    }
}