import React from 'react';

import './footer.scss';

export default class Footer extends React.Component {
    constructor(public props) {
        super(props);
    }

    onBackToTopClicked() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: `smooth`
        });
    }

    render () {
        return (
            <div className="footer">
                <div onClick={this.onBackToTopClicked.bind(this)} className="footer-back-to-top-button">
                    <div className="footer-back-to-top-button-text">
                        Back to Top
                    </div>
                </div>
                <div className="footer-designed-by">
                    2020 | Designed by Shuan
                </div>
            </div>
        );
    }
}