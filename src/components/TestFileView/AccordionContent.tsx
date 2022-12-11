import React from 'react';
import { StyledAccordionContent } from './style';
import { AccordionProps } from './types';

export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledAccordionContent {...props} ref={forwardedRef}>
      {children}
    </StyledAccordionContent>
  )
);

AccordionContent.displayName = 'AccordionContent';
