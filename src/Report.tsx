import React from 'react';
import { isVRT } from './constants';
import HtmlReporter from './reporters/HtmlReporter';
import VrtReporter from './reporters/VrtReporter';

const Report: React.FC = () => (isVRT ? <VrtReporter /> : <HtmlReporter />);

export default Report;
