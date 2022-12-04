import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { TooltipArrow, TooltipContent } from './style';

type TooltipProps = {
  content: string;
  children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  return (
    <RadixTooltip.Provider delayDuration={100}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent sideOffset={5}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
