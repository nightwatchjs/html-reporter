import React, { ReactNode } from 'react';
import styled from 'styled-components';
import * as Accordion from '@radix-ui/react-accordion';
import { TimerIcon } from '../../icons';

interface Props {
  children: ReactNode;
}

const TestFileView: React.FC = () => {
  return (
    <Wrapper>
      <Accordion.Root type="single" defaultValue="item-1" collapsible>
        <Accordion.Item value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </Wrapper>
  );
};

const AccordionTrigger = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, forwardedRef) => (
    <Accordion.Header>
      <Accordion.Trigger {...props} ref={forwardedRef}>
        {children}
        <TimerIcon />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, forwardedRef) => (
    <Accordion.Content {...props} ref={forwardedRef}>
      <div>{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = 'AccordionContent';
AccordionTrigger.displayName = 'AccordionTrigger';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
`;

export default TestFileView;
