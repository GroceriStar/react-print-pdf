import React, { Component } from 'react';
import {
   PDFDownloadLink
} from '@react-pdf/renderer';
import {
  BrowserRouter, Switch, Route, Link
} from 'react-router-dom';

import { Button } from 'antd';

import {
  DocumentLayouts, GeneratePDFButton
} from '@groceristar/pdf-export';

import { MenuPDF } from '@groceristar/antd-showcase-components'

import "antd/dist/antd.css";

import { getFullGrocery, getRecipes } from "../selectors/selector";


class HomeView extends Component {

  render(){
    // const data = getFullGrocery("Grocery List Essentials");
    const data = getRecipes()[0];

    return (
      <div>

      <MenuPDF />
      <Link to="/pdf1" >pdf1 view</Link> <br />
      <Link to="/pdf2" >pdf2 view</Link> <br />
      <Link to="/pdf3" >pdf3 view</Link> <br />
      <Link to="/pdf4" >pdf4 view</Link> <br />
      <Link to="/recipe" >recipe view</Link> <br />

      <GeneratePDFButton type={'PDF4'} name={"Grocery List Essentials"} data={data}/>
    </div>
    );
  }
}

export default HomeView;
