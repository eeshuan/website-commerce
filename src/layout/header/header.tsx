import React from 'react';
import { assetsMap } from '../../assets/assetsMap';
import { Link } from 'react-router-dom';
import { Icon } from '@material-ui/core';

import './header.scss';

export default class Header extends React.Component {
    constructor(public props) {
        super(props);
    }

    render () {
        return (
            <div className="header">
                <div className="header-logo">
                    {/* <Link className="header-navbar-button" to="/">
                        <img src={assetsMap.pages.home.logo} className="header-logo-image"/>
                    </Link> */}
                </div>
                <div className="header-navbar">
                    <Link className="header-navbar-button" to="/store">Store</Link>
                    <Link className="header-navbar-button" to="/about">About</Link>
                    <Link className="header-navbar-icon" to="/cart">
                        <Icon className="fas fa-shopping-cart"></Icon>
                    </Link>
                    <Link className="header-navbar-icon" to="/login">
                        {`Login`}
                        {/* <Icon className="fas fa-user"></Icon> */}
                    </Link>
                </div>
            </div>
        );
    }
}