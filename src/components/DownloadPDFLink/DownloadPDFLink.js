import React, { Component } from 'react';
import {
   PDFDownloadLink
} from '@react-pdf/renderer';


import { Button } from 'antd';


import { DocumentLayouts }  from '../index';


// import RenderLists from '../RenderLists/RenderLists';

// @TODO rename this component name.
// because it's quite similar to component from @react-pdf - see above
// Maybe WrapperPDFDownloadLink is a long, but self exlpanatory name?

//@TODO create a method that will generate a name - in order to keep it better - maybe????

//@TODO right now color of text Download now is blue on blue background
// we also didn't see a text - loading now.....

class DownloadPDFLink extends Component {

  render(){
    const { type, name, data } = this.props;

    return (
        <Button
          type="primary"
          icon="download"
          size="large">

           <PDFDownloadLink
             document={DocumentLayouts(type, name, data)}
             fileName={name + ".pdf"}>
               {({ blob, url, loading, error }) => (
                 loading ? 'Loading document...' : 'Download now!'
               )}
           </PDFDownloadLink>

       </Button>
    );
  }
}

export default DownloadPDFLink;
