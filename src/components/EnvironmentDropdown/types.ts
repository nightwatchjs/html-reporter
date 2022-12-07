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

export type EnvironmentDropdownProps = {
  data: EnvironmentData[];
};
