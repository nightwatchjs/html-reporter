import React, { useState, createContext, useMemo } from 'react';
import { findFailedTestDetails, findVrtTestDetails } from '../helper/findFailedTestDetails';

const ReportContext = createContext<any>(null);

type ReportContextProps = {
  children: React.ReactNode;
};

const ReportContextProvider: React.FC<ReportContextProps> = ({ children }) => {
  const { name, fileIndex, testIndex } = findFailedTestDetails();

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

const ReportVrtContextProvider: React.FC<ReportContextProps> = ({ children }) => {
  const { name, fileIndex, testIndex } = findVrtTestDetails();

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

export { ReportContext, ReportContextProvider, ReportVrtContextProvider };
