import React from 'react';
import Layout from '../layout/layout';

import './cart.scss';

export default class Cart extends React.Component {
    constructor(public props) {
        super(props);
    }

    render () {
        return (
            <Layout>
                This is the cart
            </Layout>
        );
    }
}