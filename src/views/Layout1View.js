import React from 'react';

import {
  PDFViewer,
  // Document, Page,
  // Text, View,Font, Image, StyleSheet
} from '@react-pdf/renderer';

import {
  DocumentLayouts
} from '@groceristar/pdf-export';

// this style file related only for rendering preview at React.
// we don't add styles of our PDF documents here
// @TODO deal with it
import { previewStyles as styles } from './previewStyles'

// import Doc from 'fractals/index';
// Create styles
// import styles from './styles'
// import Fractal from './fractals/Fractal';


import { getFullGrocery } from "../selector";

// Create Document Component

const Layout1View = () => {

  const data = getFullGrocery("Grocery List Essentials");
  // console.log(data);
  const documentTitle = data.name;
  return (
    <PDFViewer width={1200} height={1000}>
      {DocumentLayouts('PDF1', "Grocery List Essentials", data)}
    </PDFViewer>
  );

}
// const Layout1View = () => {
//
//   const data = getFullGrocery("Grocery List Essentials");
//   // console.log(data);
//   const documentTitle = data.name;
//   return (
//     <PDFViewer width={1200} height={1000}>
//
//
//
//     <Document>
//       <Page size="A4" style={styles.page}>
//
//           <View style={styles.section}>
//             <Text style={styles.text}>
//               {documentTitle}
//             </Text>
//             {/*}<RenderLists1 data={data} />*/}
//             {DocumentLayouts('PDF1', "Grocery List Essentials", data)}
//
//
//           </View>
//     </Page>
//     </Document>
//   </PDFViewer>
//   );
//
// }
export default Layout1View;
