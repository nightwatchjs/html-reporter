import React, { Fragment } from 'react';
import { isVRT } from './constants';
import HtmlReporterComponent from './htmlReporterComponent';
import VrtReporterComponent from './vrtReporterComponent';

const Report: React.FC = () => {
  return (
    <Fragment>
      {isVRT ? <VrtReporterComponent /> : <HtmlReporterComponent />}
    </Fragment>
  )
};

export default Report;
