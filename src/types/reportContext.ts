export interface IReportContext {
  environmentName: string;
  setEnvironmentName: React.Dispatch<React.SetStateAction<string>>;
  fileId: string;
  setFileId: React.Dispatch<React.SetStateAction<string>>;
  testId: string;
  setTestId: React.Dispatch<React.SetStateAction<string>>;
}
