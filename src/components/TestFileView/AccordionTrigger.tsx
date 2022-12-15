import React from 'react';
import { Text } from '../Text';
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
  ({ children, failed, expandedIds, value, ...props }, forwardedRef) => (
    <AccordionHeader>
      <StyledAccordionTrigger {...props} ref={forwardedRef}>
        <AccordionHeaderContent>
          {!failed ? <CheckCircleIcon /> : <CancelIcon />}
          <Text
            lineHight={20}
            fontSize={14}
            color="grey-100"
            fontWeight="--font-weight-bold"
            transformText>
            {children}
          </Text>
        </AccordionHeaderContent>
        {expandedIds.includes(value) ? <RemoveIcon /> : <AddIcon />}
      </StyledAccordionTrigger>
    </AccordionHeader>
  )
);

AccordionTrigger.displayName = 'AccordionTrigger';
