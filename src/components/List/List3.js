import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet } from '@react-pdf/renderer';

// this component important to generation PDF

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    // marginBottom: 5,
    "marginLeft": "21px",
    // marginTop:5,
    borderLeft:"2 solid green"
  },
  bulletPoint: {
    width: 10,
    fontSize: 14,
  },
  text: {
    // flex: 1,
    fontSize: 14,
    marginTop:4,
    marginLeft:4,
    marginBottom:1
     // justifyContent:'center'
  },
  blockItem: {
   backgroundColor: 'white',
   margin:1,
   marginRight:2,
   marginLeft:2,
   // marginBottom:2,
   justifyContent:'center',
   // marginLeft:10,
   // border: '1 solid black'
 },
  knob: {

    // borderBottomWidth:1,
    // borderBottomColor:'green',
    // marginLeft:10,
    // flexShrink:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '21px',
    height: '21px',
    // borderRightWidth: 2,
    // borderRightColor: 'green',
    position: 'absolute',
    backgroundColor: 'white',
    fontSize: 8,
  },
});

const List3 = ({ children }) => children;


export const Item  = ({ children}) => (
  <View style={styles.blockItem} debug={false}>
    {/* <View style={[styles.knob]}>
    </View> */}
    <View style={styles.item} debug={false}>
      <Text style={styles.text}>{children}</Text>
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
