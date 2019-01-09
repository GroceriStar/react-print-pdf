import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import List2, { Item } from '../List/List2';

// @TODO move this selector away from this not a container like component.
import { getFullGrocery } from "../../selectors/selector";


import uuidv1 from 'uuid/v1';
// This component is related to creating PDF document


const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor:'#45322E',
    color:"white",
    // borderBottomWidth: 5,
    //   borderBottomColor: 'red',
    // borderBottomStyle: "solid",
    padding: 4,
    // border: '1 solid black',
    // borderWidth: 1,
    // borderColor: 'black',
  },
  skills: {
    fontSize: 14,
    marginBottom: 10,
  },
  main:{
  marginTop: 10,
  // borderLeft: '1 solid black',
  // borderRight: '1 solid black',
  },
});


const Lists2 = ({ department, ingredients }) => (
  <View style={styles.main}>
    <Text style={styles.title}>
      {department}
    </Text>
    <List2>
      {ingredients.map((ingredient, num) => <Item
        key={uuidv1()}>{ingredient}</Item>)}
    </List2>
  </View>
);

// @TODO this is a bad situation where we have a passing data as it is - we use names, not id at not a main container - component
// and this will be hardly to catch later
const RenderLists2 = (props) => (
  <View>
    {getFullGrocery(props.groceryName2).map(item => (
      <Lists2
        key={uuidv1()}
        department={item.department}
        ingredients={item.ingredients} />
    ))}
  </View>
);


Lists2.propTypes = {
  name: PropTypes.string,
  skills: PropTypes.array,
};

export default RenderLists2;
