import { useContext } from 'react';
import { ReportContext } from '../contexts/ReportContext';
import { IReportContext } from '../types/reportContext';

export const useReportContext = () => {
  const context = useContext<IReportContext>(ReportContext);

  if (context === undefined) {
    throw new Error('useReportContext was used outside of its Provider');
  }

  return context;
};
