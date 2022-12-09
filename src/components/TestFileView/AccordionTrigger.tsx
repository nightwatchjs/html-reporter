import React from 'react';
import {
  AccordionHeader,
  AccordionHeaderContent,
  AddIcon,
  CancelIcon,
  CheckCircleIcon,
  RemoveIcon,
  StyledAccordionTrigger
} from './style';
import { AccordionTriggerProps } from './types';

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
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

AccordionTrigger.displayName = 'AccordionTrigger';
