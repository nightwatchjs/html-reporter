import React, { ReactNode, useState } from 'react';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useReportContext } from '../../hooks/ReportContext';
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
}

interface AccordionTriggerProps extends Props {
  failed: boolean;
  value: string;
}

const TestFileView: React.FC = () => {
  const { environmentName, fileId } = useReportContext();
  const { environments } = useGlobalContext();

  const {
    files: { pass, fail, skip }
  } = environments[environmentName];
  console.log(pass, fail, skip);

  const [failed, setFailed] = useState(['item-1', 'item-2']);

  return (
    <AccordionRoot type="multiple" value={failed} onValueChange={(data) => setFailed(data)}>
      {fail &&
        fail.map((file) => (
          // list of items fail/pass object, filter criteria (memo) = "goo"
          // filter =>
          // [{},{}]
          // key = "fail-1"
          <AccordionItem key={file.key} value="item-1">
            <AccordionTrigger failed={failed.includes('item-1')} value="item-1">
              {file.fileName}
            </AccordionTrigger>
            <AccordionContent>
              {file.tests.map((test, index) => {
                return <TestBlock key={index}>{test.testName}</TestBlock>;
              })}
            </AccordionContent>
          </AccordionItem>
        ))}
      {pass &&
        pass.map((file) => (
          <AccordionItem key={file.key} value="item-1">
            <AccordionTrigger failed={failed.includes('item-1')} value="item-1">
              {file.fileName}
            </AccordionTrigger>
            <AccordionContent>
              {file.tests.map((test, index) => {
                return <TestBlock key={index}>{test.testName}</TestBlock>;
              })}
            </AccordionContent>
          </AccordionItem>
        ))}
    </AccordionRoot>
  );
};

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, failed, ...props }, forwardedRef) => (
    <AccordionHeader>
      <StyledAccordionTrigger {...props} ref={forwardedRef}>
        <AccordionHeaderContent>
          {props.value === 'item-5' ? <CheckCircleIcon /> : <CancelIcon />}
          {children}
        </AccordionHeaderContent>
        {failed ? <RemoveIcon /> : <AddIcon />}
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
