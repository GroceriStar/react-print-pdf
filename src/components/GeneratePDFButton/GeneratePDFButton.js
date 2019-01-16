import React from 'react';
// Create styles

import { Button } from 'antd';

// import DownloadPDFLink from '../DownloadPDFLink/DownloadPDFLink';
import { DownloadPDFLink } from '../index'


class GeneratePDFButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    }
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render(){
    const { type, name, data } = this.props;
    return (
      <div>
        {this.state.isHidden &&
           <Button type="primary" icon="file-pdf" size="large"
              onClick={this.toggleHidden.bind(this)}>
              Generate PDF file
          </Button>
        }

         {!this.state.isHidden &&
            <DownloadPDFLink
              type={type} name={name} data={data}/>
         }
       </div>
   );
 }
}

export default GeneratePDFButton;
