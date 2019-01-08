import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

import RenderLists3 from '@groceristar/pdf-export';
// import RenderLists3 from './components/RenderLists/RenderLists3';

// Create styles
// import styles from './styles'

import { getFullGrocery } from "./selector";

// console.log(styles)
const data = getFullGrocery("19 Gluten-Free Foods Shopping List");
console.log(data);
// Create Document Component

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  text: {
    "font-size": "18px"
  },
  block: {
      backgroundColor: 'red'
  },
  block1: {
      backgroundColor: 'green',
      border: '1 solid purple'
  }
});

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

const Layout3View = () => (
  <PDFViewer width={1200} height={1000}>
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.section}>
        <Text style={styles.text}>
          19 Gluten-Free Foods Shopping List
        </Text>

        <RenderLists3 data={data} />
          {/* <RenderLists1 groceryName2={"19 Gluten-Free Foods Shopping List"}/> */}
    </View>
    </Page>
  </Document>
</PDFViewer>
);


export default Layout3View;
