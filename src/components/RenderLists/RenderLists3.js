import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import List3, { Item } from '../List/List3';

// @TODO move this selector away from this not a container like component.
// import { getFullGrocery } from "../../../selectors/selector";


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
    // padding: 4,
    // border: '1 solid black',
    // borderWidth: 1,
    // borderColor: 'black',
    flexDirection:'column',
  },
  skills: {
    fontSize: '14px',
    // marginBottom: 10,
  },
  main: {
    marginTop: '10px',
    display: 'flex',
    minHeight: '60px',
    border: '1px solid black',
    width: '300px'
  // borderLeft: '1 solid black',
  // borderRight: '1 solid black',
  },
  block: {

    margin: '0',
    flexDirection:'column',
    backgroundColor:'green',
  }
});


const ListsDepartment = ({ department, ingredients }) => (
  <View style={styles.main}>
    <View>
      <Text style={styles.title}>
        {department}
      </Text>
    </View>

    {/*}<View style={styles.block} > */}
    <List3>
      {ingredients.map((ingredient, num) => <Item
        key={uuidv1()}>{ingredient}</Item>)}
    </List3>
     {/*</View> */}

  </View>
);

// @TODO this is a bad situation where we have a passing data as it is - we use names, not id at not a main container - component
// and this will be hardly to catch later
const RenderLists3 = (props) => (
  <View>
    {props.data.map(item => (
      <ListsDepartment
        key={uuidv1()}
        department={item.department}
        ingredients={item.ingredients} />
    ))}
  </View>
);


ListsDepartment.propTypes = {
  // name: PropTypes.array, because getting an error expected array but receiving string
  department: PropTypes.string,
  ingredients: PropTypes.array,
};

export default RenderLists3;
