import React, { ReactNode, useState } from 'react';
import TestBlock from '../TestBlock';
import {
  AccordionHeader,
  AccordionHeaderContent,
  AccordionItem,
  AccordionRoot,
  AddIcon,
  CancelIcon,
  CheckCircleIcon,
  RemoveIcon,
  StyledAccordionContent,
  StyledAccordionTrigger
} from './style';

interface Props {
  children: ReactNode;
  'data-state'?: string;
  failed?: string[];
  value?: string;
}

const TestFileView: React.FC = () => {
  const [failed, setFailed] = useState(['item-1', 'item-2']);

  return (
    <AccordionRoot type="multiple" value={failed} onValueChange={(data) => setFailed(data)}>
      <AccordionItem value="item-1">
        <AccordionTrigger failed={failed} value="item-1">
          DuckDuckGo
        </AccordionTrigger>
        <AccordionContent>
          <TestBlock>Test title with lengthy text will be wrapped in second line</TestBlock>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger failed={failed} value="item-2">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent>
          <TestBlock>Find Nightwatch JS in duckDuckgo</TestBlock>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger failed={failed} value="item-3">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger failed={failed} value="item-4">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger failed={failed} value="item-5">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
};

const AccordionTrigger = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, forwardedRef) => (
    <AccordionHeader>
      <StyledAccordionTrigger {...props} ref={forwardedRef}>
        <AccordionHeaderContent>
          {props.value === 'item-5' ? <CheckCircleIcon /> : <CancelIcon />}
          {children}
        </AccordionHeaderContent>
        {props.failed!.includes(props.value!) ? <RemoveIcon /> : <AddIcon />}
      </StyledAccordionTrigger>
    </AccordionHeader>
  )
);

const AccordionContent = React.forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, forwardedRef) => (
    <StyledAccordionContent {...props} ref={forwardedRef}>
      <div>{children}</div>
    </StyledAccordionContent>
  )
);

AccordionContent.displayName = 'AccordionContent';
AccordionTrigger.displayName = 'AccordionTrigger';

export default TestFileView;
