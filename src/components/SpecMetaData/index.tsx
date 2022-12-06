import React from 'react';
import EnvironmentMetadata from '../EnvironmentMetadata';
import FilePathView from '../FilePathView';
import Separator from '../Separator';
import Tags from '../Tags';
import TestBlockName from '../TestBlockName';
import { Text } from '../Text';
import { EnvironmentAndSpecName, Metadata, TagGroup, TestBlockDetails, Wrapper } from './style';

const SpecMetaData: React.FC = () => {
  return (
    <Wrapper>
      <Metadata>
        <EnvironmentAndSpecName>
          <Text fontSize={12} lineHight={20} color="grey-100">
            Environment 3
          </Text>
          <Separator height={12} borderColor="--color-grey-100" />
          <Text fontSize={12} lineHight={20} color="grey-100">
            Spec: duckDuckGo.js
          </Text>
        </EnvironmentAndSpecName>
        <EnvironmentMetadata
          meta={{
            device: 'desktop',
            browserName: 'firefox',
            browserVersion: 83,
            operatingSystemName: 'windows',
            tags: ['local'],
            time: {
              min: 1,
              sec: 1
            }
          }}
        />
      </Metadata>
      <TestBlockName status="failed">Find Nightwatch JS in duckDuckGo search</TestBlockName>

      <TestBlockDetails>
        <FilePathView>/nightwatch/examples/basic/duckDuckGo.js: 43</FilePathView>
        <TagGroup>
          <Tags>Tag Name</Tags>
          <Tags>Tag Name</Tags>
          <Tags>+2</Tags>
        </TagGroup>
      </TestBlockDetails>
    </Wrapper>
  );
};

export default SpecMetaData;
