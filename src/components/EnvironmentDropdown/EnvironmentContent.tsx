import React from 'react';
import EnvironmentMetadata, { MetaDataProps } from '../EnvironmentMetadata';
import TestResultCount from '../TestResultCount';
import { Content, EnvironmentDetails, EnvironmentHeading } from './EnvironmentContent.style';

type EnvironmentContentProps = {
  name: string;
  meta: MetaDataProps['meta'];
  testResult: {
    passed: number;
    failed: number;
    skipped: number;
  };
};

const EnvironmentContent: React.FC<EnvironmentContentProps> = ({
  name,
  meta,
  testResult: { passed, failed, skipped }
}) => {
  return (
    <Content>
      <EnvironmentDetails>
        <EnvironmentHeading>{name}</EnvironmentHeading>
        <EnvironmentMetadata meta={meta} />
      </EnvironmentDetails>
      <TestResultCount passed={passed} failed={failed} skipped={skipped} />
    </Content>
  );
};

export default EnvironmentContent;
