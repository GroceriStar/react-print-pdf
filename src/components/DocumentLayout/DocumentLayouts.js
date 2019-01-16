import React from 'react';
import {
  Text,
  Page,
  View,
  Document
} from '@react-pdf/renderer';

// import styles from './styles'

import RenderLists1 from '../RenderLists/RenderLists1';
import RenderLists2 from '../RenderLists/RenderLists2';
import RenderLists3 from '../RenderLists/RenderLists3';
import RenderLists4 from '../RenderLists/RenderLists4';

import styles from './styles';

const DocumentLayouts = ( type, name, data ) => {
  let layout

  switch(type){
    case 'PDF1':
      layout = <RenderLists1 data={data}/>
      break;

    case 'PDF2':
      layout = <RenderLists2 data={data}/>
      break;

    case 'PDF3':
      layout = <RenderLists3 data={data}/>
      break;

    case 'PDF4':
      layout = <RenderLists4 data={data}/>
      break;

    default:
      layout = <RenderLists1 data={data}/>
      break;
  }

return(
  <Document>
    <Page size="A4" style={styles.page} wrap>
      <View style={styles.section}>
        <Text style={styles.text}>
          {name}
        </Text>
        {layout}
      </View>
    </Page>
  </Document>
)
}

export default DocumentLayouts;
