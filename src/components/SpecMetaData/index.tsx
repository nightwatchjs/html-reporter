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
import TestMetadataVrt from '../TestMetadataVrt';

const returnEnvironmentMetadata = (meta: any) => {
  return (<EnvironmentMetadata
  meta={{
    device: meta?.device as any,
    browserName: meta?.browserName as any,
    browserVersion: meta?.browserVersion as any,
    operatingSystemName: meta?.platformName as any,
    tags: [meta?.executionMode as any],
    time: convertMsToTime(meta?.time).time
  }}
/>)
}

const returnTestBlockDetails = (meta: any) => {
  return (<TestBlockDetails>
    <FilePathView>{`${meta?.filepath}`}</FilePathView>
    {/* <TagGroup>
      <Tags>Tag Name</Tags>
    </TagGroup> */}
  </TestBlockDetails>)
}

const returnTestMetadataVrt = (meta: any) => {
  return (<TestMetadataVrt
    meta={{
      browserName: meta?.envName as any,
      diff: meta?.diff as any
    }}
  />)
}
const SpecMetaData: React.FC = () => {
  // Will be replaced 
const vrt = true;
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
        {/* FIXME: remove type casting as any */}
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
        { vrt ?  returnTestMetadataVrt(meta) : returnEnvironmentMetadata(meta) }
      </Metadata>
      <TestBlockName status={status}>{testName}</TestBlockName>
      { !vrt ?  returnTestBlockDetails(meta): '' }
    </Wrapper>
  );
};

export default SpecMetaData;
