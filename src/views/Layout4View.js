import React from 'react';

import {
  PDFViewer, Document, Page,
  Text, View, Font, Image, StyleSheet
} from '@react-pdf/renderer';

import { getRecipes } from "../selectors/selector";
import {
  DocumentLayouts
} from '@groceristar/pdf-export';

// this style file related only for rendering preview at React.
// we don't add styles of our PDF documents here
import { previewStyles as styles } from './previewStyles'




const Layout4View = () => {

  const data = getRecipes()[0];
  // console.log(data);

  return (
    <PDFViewer width={1200} height={1000}>
      {DocumentLayouts('PDF4', "Recipes", data)}
    </PDFViewer>
  );

}

export default Layout4View;
