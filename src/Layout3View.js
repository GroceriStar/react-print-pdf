import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer, Document, Page, Text, View,Font, Image, StyleSheet } from '@react-pdf/renderer';

import { RenderLists3 } from '@groceristar/pdf-export';


// import { RenderLists3 } from './components/index'




// import Doc from 'fractals/index';
// Create styles
// import styles from './styles'
// import Fractal from './fractals/Fractal';



import { getFullGrocery } from "./selector";

// console.log(styles)

// Create Document Component

// const styles = StyleSheet.create({
//   page: {
//     // flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   // container: {
//   //   flex: 1,
//   //   flexDirection: 'row',
//   //   '@media max-width: 400': {
//   //     flexDirection: 'column',
//   //   },
//   // },
//   section: {
//     // margin: 10,
//     // padding: 10,
//     // flexGrow: 1
//   },
//   direction:{
//     flexGrow:1,
//
//     // flexDirection: 'row'
//   },
//   directionColumn:{
//     flexGrow:1,
//     flexDirection: 'column'
//   },
//   itemContent:{
//     flexGrow: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//    backgroundColor: '#e14427',
//   }
//   // text: {
//   //   "font-size": "18px"
//   // },
//   // block: {
//   //     backgroundColor: 'red'
//   // },
//   // block1: {
//   //     backgroundColor: 'green',
//   //     border: '1 solid purple'
//   // }
// });

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  direction:{
      flex:1,
    }
});


const Layout3View = () => {

  const data = getFullGrocery("19 Gluten-Free Foods Shopping List");
  // console.log(data);

  return (
    <PDFViewer width={1200} height={1000}>
    <Document>
      <Page size="A4" style={styles.page}>
          <View style={styles.direction}>
            <RenderLists3 data={data} />

          </View>
    </Page>
    </Document>
  </PDFViewer>
  );

}

export default Layout3View;
