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
  isDropdownTrigger?: boolean;
};

const EnvironmentContent: React.FC<EnvironmentContentProps> = ({
  name,
  meta,
  testResult: { passed, failed, skipped },
  isDropdownTrigger
}) => {
  return (
    <Content>
      <EnvironmentDetails>
        <EnvironmentHeading isDropdownTrigger={isDropdownTrigger}>{name}</EnvironmentHeading>
        <EnvironmentMetadata meta={meta} />
      </EnvironmentDetails>
      <TestResultCount passed={passed} failed={failed} skipped={skipped} />
    </Content>
  );
};

export default EnvironmentContent;
