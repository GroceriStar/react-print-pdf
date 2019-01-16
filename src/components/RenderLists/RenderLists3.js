import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import List3, { Item } from '../List/List3';

import uuidv1 from 'uuid/v1';
import styles from "./StylesRenderLists3";


const ListsDepartment = ({ department, ingredients }) => (
  <View style={styles.main}>
    <View>
      <Text style={styles.title}>
        {department}
      </Text>
    </View>

    {/*}<View style={styles.block} > */}
    <List3>
      {ingredients.map((ingredient, num) =>
        <Item
          key={uuidv1()}>
          {ingredient}
          </Item>
        )}
    </List3>
     {/*</View> */}

  </View>
);

// @TODO this is a bad situation where we have a passing data as it is - we use names, not id at not a main container - component
// and this will be hardly to catch later

const RenderLists3 = ({ data }) => {

  return (
    <View>

      {data && data.map(item => (
        <ListsDepartment
          key={uuidv1()}
          department={item.department}
          ingredients={item.ingredients} />
      ))}

    </View>
  );


}

ListsDepartment.propTypes = {
  // name: PropTypes.array, because getting an error expected array but receiving string
  department: PropTypes.string,
  ingredients: PropTypes.array,
};

export default RenderLists3;
