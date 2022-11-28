import React, { Fragment } from 'react';
import ApproveAll from './components/ApproveAll';
import Header from './components/Header';
import TestDetailsVrt from './components/TestDetailsVrt';
import Footer from './components/Footer';

const image_path = '../src/images/sample.svg'
const ReportVrt: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <ApproveAll />
      <TestDetailsVrt baseline_img = {image_path} diff_img = {image_path}/>
      <Footer />
    </Fragment>
  );
};

export default ReportVrt;
