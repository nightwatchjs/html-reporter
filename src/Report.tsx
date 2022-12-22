import React, { Fragment } from 'react';
import { isVRT } from './constants';
import HtmlReporter from './HtmlReporter';
import VrtReporter from './VrtReporter';

const Report: React.FC = () => {
  return <Fragment>{isVRT ? <VrtReporter /> : <HtmlReporter />}</Fragment>;
};

export default Report;
