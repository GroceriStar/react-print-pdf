import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet } from '@react-pdf/renderer';
import List1, { Item } from '../List/List1';
import uuidv1 from 'uuid/v1';

// @TODO move this selector away from this not a container like component.
import styles from "./StylesRenderLists1";

const Lists1 = ({ department, ingredients }) => (
  <View>
    <Text style={styles.title}>
      {department}
    </Text>
    <List1>
      {ingredients.map((ingredient) => <Item key={uuidv1()}>{ingredient}</Item>)}
    </List1>
  </View>
);

// @TODO this is a bad situation where we have a passing data as it is - we use names, not id at not a main container - component
// and this will be hardly to catch later
const RenderLists1 = ({ data }) => (
  <View>
    {data.map(item => (
      <Lists1
        key={uuidv1()}
        department={item.department}
        ingredients={item.ingredients} />
    ))}
  </View>
);


Lists1.propTypes = {
  department: PropTypes.string,
  ingredients: PropTypes.array,
};

export default RenderLists1;
