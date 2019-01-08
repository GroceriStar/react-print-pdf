import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
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
