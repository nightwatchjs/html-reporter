import { ReactNode } from 'react';
import { IFileStats, Status } from '../../transform';

export type TestFileViewProps = {
  query: string;
  expanded: string[];
  setExpanded: React.Dispatch<React.SetStateAction<string[]>>;
  data: {
    pass?: IFileStats[];
    fail?: IFileStats[];
    skip?: IFileStats[];
  };
  setTabValue?: React.Dispatch<React.SetStateAction<string>>;
};

export type AccordionItemsProps = {
  query: string;
  data: IFileStats[];
  expandedIds: string[];
  setTabValue?: React.Dispatch<React.SetStateAction<string>>;
};

export interface AccordionProps {
  children: ReactNode;
}

export interface AccordionTriggerProps extends AccordionProps {
  status: Status;
  value: string;
  expandedIds: string[];
}
