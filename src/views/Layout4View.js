import React from 'react';

import {
  PDFViewer, Document, Page,
  Text, View, Font, Image, StyleSheet
} from '@react-pdf/renderer';

import { getRecipes } from "../selectors/selector";
import { DocumentLayout4 } from '../components/index'


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


const Layout4View = () => {

  const data = getRecipes()[0];
  // console.log(data);

  return (
    <PDFViewer width={1200} height={1000}>
      {DocumentLayout4(styles, data)}
    </PDFViewer>
  );

}

export default Layout4View;
