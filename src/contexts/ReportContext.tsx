import React, { useState, createContext, useMemo } from 'react';
import { findFailedTestDetails } from '../helper/findFailedTestDetails';
import { useGlobalContext } from '../hooks/GlobalContext';

const ReportContext = createContext<any>(null);

type ReportContextProps = {
  children: React.ReactNode;
};

const ReportContextProvider: React.FC<ReportContextProps> = ({ children }) => {
  const { environments } = useGlobalContext();
  const { name, fileIndex, testIndex } = findFailedTestDetails(environments);

  const [environmentName, setEnvironmentName] = useState<string>(name);
  const [fileId, setFileId] = useState<string>(fileIndex);
  const [testId, setTestId] = useState<string>(testIndex);

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
