import React from 'react';
import Layout from '../layout/layout';

import './notFound.scss';

export default class NotFound extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <div>
                    Page is not found sir
                </div>
            </Layout>
        );
    }
}