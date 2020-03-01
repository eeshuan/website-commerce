import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/routes';

export default class Main extends React.Component {
  constructor(public props) {
    super(props);
  }

  render() {
    return (
      <Routes />
    )
  }
}

ReactDOM.render(<Main />, document.querySelector('#main'));