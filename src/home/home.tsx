import React from 'react';

import './home.scss';

export default class Home extends React.Component {
    constructor(public props) {
        super(props);
    }

    render() {
        return (
            <div className="hazelnut-home">
                This is the beginning of the commerce website
            </div>
        );
    }
}