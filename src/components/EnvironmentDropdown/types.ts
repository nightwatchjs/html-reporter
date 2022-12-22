import { MetaDataProps } from '../EnvironmentMetadata';

export type EnvironmentData = {
  name: string;
  origName: string;
  meta: MetaDataProps['meta'];
  testResult: {
    passed: number;
    failed: number;
    skipped: number;
  };
};
