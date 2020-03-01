import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from '../home/home';
import Store from '../store/store';
import About from '../about/about';
import Login from '../login/login';
import Cart from '../cart/cart';

export default class Routes extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={()=>{return(<Home data={this.props.data}/>)}}/>
                    <Route path="/store" exact component={()=>{return(<Store data={this.props.data}/>)}}/>
                    <Route path="/about" exact component={()=>{return(<About data={this.props.data}/>)}}/>
                    <Route path="/login" exact component={()=>{return(<Login data={this.props.data}/>)}}/>
                    <Route path="/cart" exact component={()=>{return(<Cart data={this.props.data}/>)}}/>
                </Switch>
            </HashRouter>
        );
    }
}