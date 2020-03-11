import React from 'react';
import Layout from '../layout/layout';

import './product.scss';

export default class Product extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div className="product">
                    {this.props.match.params.name || "Cannot find name"}
                </div>
            </Layout>
        );
    }
}