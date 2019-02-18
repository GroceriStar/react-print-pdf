import React, { Component } from 'react';
import { Button, Icon, Layout, Row, Col, Table } from 'antd';
import { getRecipes } from '../selectors/selector'

class RecipeLayout extends Component {

  render(){
    // const { recipe } = this.props;

    const recipe  = getRecipes()[0];

    return (
      <div>
      <Row style={{ marginBottom: '20px' }}>
                <Col>
                Recipe
                </Col>
              </Row>
              <Row style={{ marginBottom: '20px' }}>
                <Col>
                  {recipe.title}
                </Col>
              </Row>
              <Row style={{ marginBottom: '20px' }}>
                <Col>

                  {recipe.directions}
                {/* <Directions items={recipe.directions} /> */}
                </Col>
              </Row>
              <Row style={{ marginBottom: '20px' }}>
                <Col>
                {recipe.ingredients}
                {/* <IngredientList items={recipe.ingredients} /> */}

                </Col>
              </Row>
              <Row style={{ marginBottom: '20px' }}>
                <Col>
                {recipe.prep_time}
                </Col>
              </Row>
              <Row style={{ marginBottom: '20px' }}>
                <Col>
                {recipe.total_time}
                </Col>
              </Row>
              <Row style={{ marginBottom: '20px' }}>
                <Col>
                {recipe.recipe_yield}
                </Col>
              </Row>
              <Row style={{ marginBottom: '20px' }}>
                <Col>
                {recipe.url}
                </Col>
              </Row>
            </div>
    );
  }
}

export default RecipeLayout;
