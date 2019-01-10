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
    color:"white",
    flexDirection:'column',
  },
  skills: {
    fontSize: '14px',
    // marginBottom: 10,
  },
  main: {
    marginTop: '10px',
    minHeight: '60px',
    width: '300px',
    backgroundColor: 'green',
    paddingBottom:1,
  },
  block: {
    margin: '0',
    flexDirection:'column',
    backgroundColor:'green',
  },
  department:{
      // justifyContent:'center',
     alignItems:'center'
  }
});


const ListsDepartment = ({ department, ingredients }) => (
    <View style={styles.main} debug={false}>
      {/* <View>
            <Text style={styles.title}>19 Gluten-Free Foods Shopping List </Text>
      </View> */}
    <View style={styles.department}>


      <Text style={styles.title}>
        {department}
      </Text>
    </View>

    <List3>
      {ingredients.map((ingredient, num) => <Item
        key={uuidv1()}>{ingredient}</Item>)}
    </List3>
  </View>

);

// @TODO this is a bad situation where we have a passing data as it is - we use names, not id at not a main container - component
// and this will be hardly to catch later
const RenderLists3 = (props) => (
    props.data.map(item => (
      <ListsDepartment
        key={uuidv1()}
        department={item.department}
        ingredients={item.ingredients} />
    ))

);


ListsDepartment.propTypes = {
  // name: PropTypes.array, because getting an error expected array but receiving string
  department: PropTypes.string,
  ingredients: PropTypes.array,
};

export default RenderLists3;
