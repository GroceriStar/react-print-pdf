import React from 'react';
import {
  Text,
  Page,
  View,
  Document
} from '@react-pdf/renderer';

// import styles from './styles'

import RenderLists3 from '../RenderLists/RenderLists3';

// const DocumentLayout = ( styles, name ) => (
import { getFullGrocery } from "../../selectors/selector";

  const DocumentLayout3 = ( styles, name ) => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.section}>
        <Text style={styles.text}>
          {name}
        </Text>
          <RenderLists3 data={getFullGrocery(name)} />
        {/* <View style={styles.block}>
          <View>
            <Text>one</Text>
          </View>
          <View style={styles.block1}>
            <Text>one2</Text>
          </View>
          <View style={styles.block1}>
            <Text>one3</Text>
          </View>
          <View style={styles.block1}>
              <Text>on4</Text>
          </View>
          <View style={styles.block1}>
              <Text>on5</Text>
          </View>
          <View style={styles.block1}>
            <Text>one6</Text>
          </View>
        </View> */}
      </View>
    </Page>
  </Document>
);

export default DocumentLayout3;
