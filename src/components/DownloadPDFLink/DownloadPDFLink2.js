import React, { Component } from 'react';
import {
   PDFDownloadLink
} from '@react-pdf/renderer';


import { Button } from 'antd';


import { DocumentLayout2, RenderLists2 }  from '../index';

import styles from './styles'

// import RenderLists from '../RenderLists/RenderLists';

// @TODO rename this component name.
// because it's quite similar to component from @react-pdf - see above
// Maybe WrapperPDFDownloadLink is a long, but self exlpanatory name?

//@TODO create a method that will generate a name - in order to keep it better - maybe????

//@TODO right now color of text Download now is blue on blue background
// we also didn't see a text - loading now.....

class DownloadPDFLink2 extends Component {

  render(){
    return (
        <Button
          type="primary"
          icon="download"
          size="large">

           <PDFDownloadLink
             document={DocumentLayout2(styles, this.props.name)}
             fileName={this.props.name + ".pdf"}>
               {({ blob, url, loading, error }) => (
                 loading ? 'Loading document...' : 'Download now!'
               )}
           </PDFDownloadLink>

       </Button>
    );
  }
}

export default DownloadPDFLink2;
