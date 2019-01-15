import React from 'react';
import {
  Text,
  Page,
  View,
  Document
} from '@react-pdf/renderer';

const DocumentLayout4 = ( styles, recipe) => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.section}>
        <Text>{recipe.title}</Text>
        <Text>{recipe.directions}</Text>
        <Text>{recipe.ingredients}</Text>
        <Text>{recipe.prep_time}</Text>
        <Text>{recipe.total_time}</Text>
        <Text>{recipe.recipe_yield}</Text>
        <Text>{recipe.url}</Text>
      </View>
    </Page>
  </Document>
);

export default DocumentLayout4;
