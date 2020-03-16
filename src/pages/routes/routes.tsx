import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from '../home/home';
import Store from '../store/store';
import About from '../about/about';
import Login from '../login/login';
import Cart from '../cart/cart';
import Product from '../product/product';
import NotFound from '../notFound/notFound';

export default class Routes extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={(props)=>{return(<Home {...props}/>)}}/>
                    <Route path="/store" exact component={(props)=>{return(<Store {...props}/>)}}/>
                    <Route path="/about" exact component={(props)=>{return(<About {...props}/>)}}/>
                    <Route path="/login" exact component={(props)=>{return(<Login {...props}/>)}}/>
                    <Route path="/cart" exact component={(props)=>{return(<Cart {...props}/>)}}/>
                    <Route path="/product/:name" exact component={(props)=>{return(<Product {...props}/>)}}/>

                    {/* Pages not routed will be defaulted to NotFound Page */}
                    <Route path="*" exact component={(props)=>{return(<NotFound {...props}/>)}}/>
                </Switch>
            </HashRouter>
        );
    }
}