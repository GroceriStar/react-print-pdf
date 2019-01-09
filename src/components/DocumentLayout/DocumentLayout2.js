import React from 'react';
import {
  Text,
  Page,
  View,
  Document
} from '@react-pdf/renderer';

// import styles from './styles'

import RenderLists2 from '../RenderLists/RenderLists2';

// const DocumentLayout = ( styles, name ) => (

  const DocumentLayout2 = ( styles, name ) => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.section}>
        <Text style={styles.text}>
          {name}
        </Text>
        <RenderLists2 groceryName2={name}/>
      </View>
    </Page>
  </Document>
);

export default DocumentLayout2;
