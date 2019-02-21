import React, { Component, Fragment } from 'react';


import "antd/dist/antd.css";

import { Router } from './Router';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router />
      </Fragment>
    );
  }
}

export default App;
