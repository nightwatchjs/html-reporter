import React, { useState, createContext, useMemo } from 'react';
import { findFailedTestDetails } from '../helper/findFailedTestDetails';

const ReportContext = createContext<any>(null);

type ReportContextProps = {
  children: React.ReactNode;
};

const ReportContextProvider: React.FC<ReportContextProps> = ({ children }) => {
  const { name, fileIndex, testIndex } = findFailedTestDetails();

  const [environmentName, setEnvironmentName] = useState<string>(name);
  const [fileId, setFileId] = useState<number>(fileIndex);
  const [testId, setTestId] = useState<number>(testIndex);

  const value = useMemo(
    () => ({
      environmentName,
      setEnvironmentName,
      fileId,
      setFileId,
      testId,
      setTestId
    }),
    [environmentName, fileId, testId]
  );

  return <ReportContext.Provider value={value}>{children}</ReportContext.Provider>;
};

export { ReportContext, ReportContextProvider };
