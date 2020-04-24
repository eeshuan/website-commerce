import React from 'react';
import Layout from '../layout/layout';

import './about.scss';

export default class About extends React.Component {
    constructor(public props) {
        super(props);
    }

    render () {
        return (
            <Layout>
                <div className="about">
                    <div className="about-title">
                        About
                    </div>
                    <div className="about-intro">
                        I designed this page to explore redux. It is being used to store the selected cart items for checkout
                    </div>
                </div>
            </Layout>
        );
    }
}