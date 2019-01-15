import React, { Component } from 'react';
import {
  BrowserRouter, Switch, Route, Link
} from 'react-router-dom';

import Layout1View from './views/Layout1View'
import Layout2View from './views/Layout2View'
import Layout3View from './views/Layout3View'
import Layout4View from './views/Layout4View'

import RecipeLayoutView from './views/RecipeLayoutView'




class Router extends Component {
  render(){
    return (
      <BrowserRouter>


        <Switch>
          <Route path="/pdf1"   exact component={Layout1View} />
          <Route path="/pdf2"   exact component={Layout2View} />
          <Route path="/pdf3"   exact component={Layout3View} />
          <Route path="/pdf4"   exact component={Layout4View} />
          <Route path="/recipe" exact component={RecipeLayoutView} />


          <Link to="/pdf1" >pdf1 view</Link> <br />
          <Link to="/pdf2" >pdf2 view</Link> <br />
          <Link to="/pdf3" >pdf3 view</Link> <br />
          <Link to="/recipe" >recipe view</Link> <br />
        </Switch>


      </BrowserRouter>
    )
  }
}

export { Router };
