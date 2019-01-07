import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout3View from './Layout3View'
import RecipeLayoutView from './RecipeLayoutView'


// @TODO later it'll have a config version
// @TODO maybe we should generate a whole <Link />? looks like this is a perfect place for doing it.

const getRecipeLink = (id) => {
  return '/recipe/'+ id;
}

class Router extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>

          <Route path="/pdf3" exact component={Layout3View} />
          <Route path="/recipe" exact component={RecipeLayoutView} />



        </Switch>
      </BrowserRouter>
    )
  }
}

export { Router, getRecipeLink };
