import React, { Fragment } from 'react';
import ApproveAll from './components/ApproveAll';
import Header from './components/Header';
import TestDetailsVrt from './components/TestDetailsVrt';
import Footer from './components/Footer';
import { ReportVrtContextProvider } from './contexts/ReportContext';

const image_path = '../src/images/sample.svg'
const ReportVrt: React.FC = () => {
  return (
    <Fragment>
    <ReportVrtContextProvider>
      {/* <Header /> */}
      <ApproveAll />
      <TestDetailsVrt />
      <Footer />
    </ReportVrtContextProvider>
  </Fragment>
  );
};

export default ReportVrt;
