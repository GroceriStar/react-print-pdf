import React from 'react';
// import ReactDOM from 'react-dom';
import {
  PDFViewer, Document, Page,
  Text, View,Font, Image, StyleSheet
} from '@react-pdf/renderer';

// import { RenderLists2 } from '@groceristar/pdf-export';
import { RenderLists2 } from '../components/index'
import { DocumentLayouts } from '../components/index'

// import { RenderLists3 } from './components/index'

// this style file related only for rendering preview at React.
// we don't add styles of our PDF documents here
import { previewStyles as styles } from './previewStyles'




// import Doc from 'fractals/index';
// Create styles
// import styles from './styles'
// import Fractal from './fractals/Fractal';



import { getFullGrocery } from "../selectors/selector";

// console.log(styles)

// Create Document Component





const Layout2View = () => {

  const data = getFullGrocery("Ultimate Grocery List");
  // console.log(data);

  return (
    <PDFViewer width={1200} height={1000}>
    <Document>
      <Page size="A4" style={styles.page}>
          <View style={styles.direction}>
            {/*<RenderLists2 data={data} /> */}
            {DocumentLayouts('PDF2', "Ultimate Grocery List", data)}
          </View>
    </Page>
    </Document>
  </PDFViewer>
  );

}

export default Layout2View;
