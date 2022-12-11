import React from 'react';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useReportContext } from '../../hooks/ReportContext';
import { convertMsToTime } from '../../utils';
import EnvironmentMetadata from '../EnvironmentMetadata';
import FilePathView from '../FilePathView';
import Separator from '../Separator';
import TestBlockName from '../TestBlockName';
import { Text } from '../Text';
import { EnvironmentAndSpecName, Metadata, TestBlockDetails, Wrapper } from './style';
import { getMetadata } from './utils';

const SpecMetaData: React.FC = () => {
  const { environmentName, fileId, testId } = useReportContext();
  const { environments } = useGlobalContext();

  // FIXME: Replace any with types
  const { testName, status, meta } = getMetadata(
    environments[environmentName],
    fileId,
    testId
  ) as any;

  return (
    <Wrapper>
      <Metadata>
        <EnvironmentAndSpecName>
          <Text fontSize={12} lineHight={20} color="grey-100">
            {meta?.envName}
          </Text>
          <Separator height={12} borderColor="--color-grey-100" />
          <Text fontSize={12} lineHight={20} color="grey-100">
            {`Spec: ${meta?.filename}`}
          </Text>
        </EnvironmentAndSpecName>
        <EnvironmentMetadata
          meta={{
            device: meta?.device as any,
            browserName: meta?.browserName as any,
            browserVersion: meta?.browserVersion as any,
            operatingSystemName: meta?.platformName as any,
            tags: [meta?.executionMode as any],
            time: convertMsToTime(meta?.time).time
          }}
        />
      </Metadata>
      <TestBlockName status={status}>{testName}</TestBlockName>

      <TestBlockDetails>
        <FilePathView>{`${meta?.filepath}`}</FilePathView>
        {/* <TagGroup>
          <Tags>Tag Name</Tags>
        </TagGroup> */}
      </TestBlockDetails>
    </Wrapper>
  );
};

export default SpecMetaData;
