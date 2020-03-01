import React from 'react';

import './home.scss';
import Layout from '../layout/layout';

export default class Home extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div className="hazelnut-home">
                    This is the beginning of the commerce website
                </div>
            </Layout>           
        );
    }
}