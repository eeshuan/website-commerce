import React from 'react';

import './layout.scss';
import Header from './header/header';
import Body from './body/body';
import Footer from './footer/footer';

export default class Layout extends React.Component {
    constructor(public props) {
        super(props);
    }

    render () {
        return (
            <div className="layout">
                <Header />
                <Body>
                    {this.props.children}
                </Body>
                <Footer />
            </div>
        );
    }
}