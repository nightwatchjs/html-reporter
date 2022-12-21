import React from 'react';
import { Text } from '../Text';
import {
  AccordionHeader,
  AccordionHeaderContent,
  AddIcon,
  RemoveIcon,
  StyledAccordionTrigger
} from './style';
import { AccordionTriggerProps } from './types';
import { statusIcon } from './util';

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, status, expandedIds, value, ...props }, forwardedRef) => (
    <AccordionHeader>
      <StyledAccordionTrigger {...props} ref={forwardedRef}>
        <AccordionHeaderContent>
          {status && statusIcon(status)}
          <Text
            lineHight={20}
            fontSize={14}
            color="grey-100"
            fontWeight="--font-weight-bold"
            transformText>
            {children}
          </Text>
        </AccordionHeaderContent>
        {status !== 'skip' && (expandedIds?.includes(value) ? <RemoveIcon /> : <AddIcon />)}
      </StyledAccordionTrigger>
    </AccordionHeader>
  )
);

AccordionTrigger.displayName = 'AccordionTrigger';
