import React from 'react';
import Layout from '../layout/layout';

import './store.scss';

export default class Store extends React.Component {
    constructor(public props) {
        super(props);
    }

    render () {
        return (
            <Layout>
                This is the store
            </Layout>
        );
    }
}