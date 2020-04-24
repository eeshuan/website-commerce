import React from 'react';
import Layout from '../layout/layout';

import './home.scss';

export default class Home extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div className="home">
                    <div className="home-welcome">
                        Welcome!
                    </div>
                    <div className="home-intro">
                        This is a simple e-commerce webpage designed by me
                    </div>
                </div>
            </Layout>           
        );
    }
}