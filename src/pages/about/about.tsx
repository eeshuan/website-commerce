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
                This is the about
            </Layout>
        );
    }
}