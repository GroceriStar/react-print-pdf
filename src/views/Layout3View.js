import React from 'react';
// import ReactDOM from 'react-dom';

import {
  PDFViewer,
  // Document,
  // Page,
  // Text,
  // View,
  // Font,
  // Image,
  // StyleSheet
} from '@react-pdf/renderer';

import {
  DocumentLayouts
} from '@groceristar/pdf-export';

// this style file related only for rendering preview at React.
// we don't add styles of our PDF documents here
// import { previewStyles as styles } from './previewStyles'



// import Doc from 'fractals/index';
// Create styles
// import styles from './styles'
// import Fractal from './fractals/Fractal';



import { getFullGrocery } from "../selectors/selector";

// console.log(styles)

// Create Document Component



const Layout3View = () => {
  const name = "19 Gluten-Free Foods Shopping List";
  // const name = "Ultimate Grocery List";
  const data = getFullGrocery(
    name

  );
  // console.log(data);

  return (
    <PDFViewer width={1200} height={1000}>
  {DocumentLayouts('PDF3', "Grocery List Essentials", data)}
  </PDFViewer>
  );

}

// return (
//   <PDFViewer width={1200} height={1000}>
//   <Document>
//     <Page size="A4" style={styles.page}>
//         <View style={styles.direction} debug={false}>
//
//
//           <Text style={styles.text}>
//             "19 Gluten-Free Foods Shopping List"
//           </Text>
//           <RenderLists3 data={data} />
//           <RenderLists3 data={data} />
//           <RenderLists3 data={data} />
//
//           {/* <RenderLists3 data={data} /> */}
//
//           {DocumentLayouts('PDF3', name, data)}
//         </View>
//   </Page>
//   <Page size="A4" style={styles.page}>
//       <View style={styles.direction} debug={false}>
//         <RenderLists3 data={data} />
//         {/* <RenderLists3 data={data} />
//         <RenderLists3 data={data} />
//         <RenderLists3 data={data} /> */}
//       </View>
// </Page>
// <Page size="A4" style={styles.page}>
//     <View style={styles.direction} debug={false}>
//       <RenderLists3 data={data} />
//       <RenderLists3 data={data} />
//       <RenderLists3 data={data} />
//       {/* <RenderLists3 data={data} /> */}
//     </View>
// </Page>
// <Page size="A4" style={styles.page}>
//   <View style={styles.direction} debug={false}>
//     <RenderLists3 data={data} />
//     {/* <RenderLists3 data={data} />
//     <RenderLists3 data={data} />
//     <RenderLists3 data={data} /> */}
//   </View>
// </Page>
//   </Document>
// </PDFViewer>
// );



export default Layout3View;
