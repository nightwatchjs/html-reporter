import { ReactNode } from 'react';
import { IFileStats } from '../../transform';

export type TestFileViewProps = {
  query: string;
};

export type AccordionItemsProps = {
  query: string;
  data: IFileStats[];
};

export interface AccordionProps {
  children: ReactNode;
}

export interface AccordionTriggerProps extends AccordionProps {
  failed: boolean;
  value: string;
}
