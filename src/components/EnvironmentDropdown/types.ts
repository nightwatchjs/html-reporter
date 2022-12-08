import { MetaDataProps } from '../EnvironmentMetadata';

export type EnvironmentData = {
  name: string;
  meta: MetaDataProps['meta'];
  testResult: {
    passed: number;
    failed: number;
    skipped: number;
  };
};
