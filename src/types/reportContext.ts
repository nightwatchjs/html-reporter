export interface IReportContext {
  environmentName: string;
  setEnvironmentName: React.Dispatch<React.SetStateAction<string>>;
  fileId: string;
  setFileId: React.Dispatch<React.SetStateAction<number>>;
  testId: string;
  setTestId: React.Dispatch<React.SetStateAction<number>>;
}
