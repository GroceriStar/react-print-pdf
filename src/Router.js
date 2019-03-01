import React, { Component } from 'react';
import {
  BrowserRouter, Switch, Route, Link
} from 'react-router-dom';

import Layout1View from './views/Layout1View'
import Layout2View from './views/Layout2View'
import Layout3View from './views/Layout3View'


// are layout4 the same to recipe layout???? I think yes
import Layout4View from './views/Layout4View'

import RecipeLayoutView from './views/RecipeLayoutView'

import Home from './views/Home'

import { MenuPDF } from '@groceristar/antd-showcase-components'


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
          <Route path="/"       exact component={Home} />


          {/*}<MenuPDF /> */}

        </Switch>


      </BrowserRouter>
    )
  }
}

export { Router };
