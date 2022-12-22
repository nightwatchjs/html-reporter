import React, { Fragment } from 'react';
import { isVRT } from './constants';
import HtmlReporterComponent from './HtmlReporterComponent';
import VrtReporterComponent from './VrtReporterComponent';

const Report: React.FC = () => {
  return <Fragment>{isVRT ? <VrtReporterComponent /> : <HtmlReporterComponent />}</Fragment>;
};

export default Report;
