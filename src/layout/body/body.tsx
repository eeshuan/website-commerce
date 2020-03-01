import React from 'react';

import './body.scss';

export default class Body extends React.Component {
    constructor(public props) {
        super(props);
    }

    render () {
        return (
            <div className="body">
                {this.props.children}
            </div>
        );
    }
}