import React from 'react';
import Browser from '../../icons/Browser';
import ChipWithIcon from '../ChipWithIcon';
import { Wrapper } from '../EnvironmentMetadata/style';
import { Text } from '../Text';

export type MetaDataProps = {
  meta: {
    browserName: 'chrome' | 'firefox' | 'safari' | 'edge';
    diff: string;
  };
};

const TestMetadataVrt: React.FC<MetaDataProps> = ({ meta: { browserName, diff } }) => {
  return (
    <Wrapper>
      <ChipWithIcon icon={<Browser name={browserName} />}>{`${browserName}`}</ChipWithIcon>
      <Text fontSize={12} lineHight={20} color="grey-100" transformText>
        {diff} diff
      </Text>
    </Wrapper>
  );
};

export default TestMetadataVrt;
