export interface IReportContext {
  environmentName: string;
  setEnvironmentName: React.Dispatch<React.SetStateAction<string>>;
  fileId: number;
  setFileId: React.Dispatch<React.SetStateAction<number>>;
  testId: number;
  setTestId: React.Dispatch<React.SetStateAction<number>>;
}
