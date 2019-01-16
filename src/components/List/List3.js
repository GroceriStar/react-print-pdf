import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet } from '@react-pdf/renderer';

// this component important to generation PDF

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    // marginBottom: 5,
    "marginLeft": "25px",
  },
  bulletPoint: {
    width: 10,
    fontSize: 14,
  },
  itemContent: {
    flex: 1,
    fontSize: 14
  },
  blockItem: {
   backgroundColor: '#e14427',
   // marginLeft:10,
   border: '1 solid black'
 },
  knob: {
    borderBottomWidth:1,
    borderBottomColor:'black',
    // marginLeft:10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '10px',
    height: '10px',
    borderWidth: 1,
    borderColor: 'black',
    position: 'absolute',
    backgroundColor: 'white',
    fontSize: 8,
  },
});

const List3 = ({ children }) => children;


export const Item  = ({ children}) => (
  <View style={styles.blockItem}>
    <View style={[styles.knob]}>
    </View>
    <View style={styles.item}>
      <Text style={styles.itemContent}>{children}</Text>
    </View>
  </View>
);

List3.propTypes = {
  children: PropTypes.node,
};

Item.propTypes = {
  children: PropTypes.node,
};



export default List3;
