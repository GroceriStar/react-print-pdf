import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom'

import './App.css';
import { Router } from './Router';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router />
        
        <Link to="/pdf1" />
        <Link to="/pdf2" />
        <Link to="/pdf3" />
        <Link to="/recipe" />
      </Fragment>
    );
  }
}

export default App;
