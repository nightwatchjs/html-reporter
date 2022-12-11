import { ReactNode } from 'react';
import { IFileStats } from '../../transform';

export type TestFileViewProps = {
  query: string;
  expanded: string[];
  setExpanded: React.Dispatch<React.SetStateAction<string[]>>;
  data: {
    pass?: IFileStats[];
    fail?: IFileStats[];
    skip?: IFileStats[];
  };
};

export type AccordionItemsProps = {
  query: string;
  data: IFileStats[];
  failedIds: string[];
  expandedIds: string[];
};

export interface AccordionProps {
  children: ReactNode;
}

export interface AccordionTriggerProps extends AccordionProps {
  failed: boolean;
  value: string;
  expandedIds: string[];
}
