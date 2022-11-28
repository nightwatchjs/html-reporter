import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import * as Accordion from '@radix-ui/react-accordion';
import { AccordionIcon } from '../../icons';
import { FailedIcon } from '../../icons';

interface Props {
  children: ReactNode;
  'data-state'?: string;
  failed?: string[];
  value?: string;
}

const TestFileView: React.FC = () => {
  const [failed, setFailed] = useState(['item-1', 'item-2']);

  return (
    <Wrapper>
      <AccordionRoot type="multiple" value={failed} onValueChange={(data) => setFailed(data)}>
        <AccordionItem value="item-1">
          <AccordionTrigger failed={failed} value="item-1">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger failed={failed} value="item-2">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
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
    </Wrapper>
  );
};

const AccordionTrigger = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, forwardedRef) => (
    <AccordionHeader>
      <StyledAccordionTrigger {...props} ref={forwardedRef}>
        <AccordionHeaderContent>
          <FailedIcon />
          {children}
        </AccordionHeaderContent>
        {props.failed!.includes(props.value!) ? (
          <AccordionIcon state="open" />
        ) : (
          <AccordionIcon state="close" />
        )}
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

const Wrapper = styled.article`
  padding: 12px 20px;
`;

const AccordionRoot = styled(Accordion.Root)`
  background: var(--color-grey-20);
  display: flex;
  flex-direction: column;
  gap: 2px;
  gap: 8px;
`;

const AccordionItem = styled(Accordion.Item)`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-grey-50);
  &:focus-within {
    position: relative;
    box-shadow: 0 0 0 2px var(--color-primary-50);
  }
`;

const AccordionHeader = styled(Accordion.Header)`
  display: flex;
  padding: 8px;
  background: var(--color-grey-50);
`;

const StyledAccordionTrigger = styled(Accordion.Trigger)`
  all: unset;
  display: flex;
  align-items: center;
  flex: 0 0 100%;
  font-family: inherit;
  background-color: transparent;
`;

const AccordionHeaderContent = styled.div`
  display: flex;
  gap: 5px;
  margin-right: auto;
  align-items: center;
`;

const StyledAccordionContent = styled(Accordion.Content)`
  background: var(--color-grey-10);
`;

export default TestFileView;
