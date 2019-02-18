import React from 'react';
// import ReactDOM from 'react-dom';
import {
  PDFViewer, Document, Page,
  Text, View,Font, Image, StyleSheet
} from '@react-pdf/renderer';

import {
  DocumentLayouts
} from '@groceristar/pdf-export';

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
    {DocumentLayouts('PDF2', "Grocery List Essentials", data)}
  </PDFViewer>
  );

}

export default Layout2View;
