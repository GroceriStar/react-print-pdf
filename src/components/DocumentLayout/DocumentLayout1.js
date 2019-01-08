import React from 'react';
import {
  Text,
  Page,
  View,
  Document
} from '@react-pdf/renderer';

// import styles from './styles'

import RenderLists1 from '../RenderLists/RenderLists1';

// const DocumentLayout = ( styles, name ) => (

  const DocumentLayout1 = ( styles, name ) => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.section}>
        <Text style={styles.text}>
          {name}
        </Text>
        <RenderLists1 groceryName2={name}/>
      </View>
    </Page>
  </Document>
);

export default DocumentLayout1;
