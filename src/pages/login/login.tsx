import React from 'react';
import Layout from '../layout/layout';

import './login.scss';

export default class Login extends React.Component {
    constructor(public props) {
        super(props);
    }

    render () {
        return (
            <Layout>
                <div>
                    This is the login
                </div>
            </Layout>
        );
    }
}