import React from 'react';
import { Error, Wrapper, Details, TabsRoot, TabsList, TabsTrigger } from './style';
import ImageContainer from '../ImageContainer';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useReportContext } from '../../hooks/ReportContext';
import { getVrtData } from './utils';
import * as Tabs from '@radix-ui/react-tabs';

const VRTView: React.FC = () => {
  const { environmentName, fileId, testId } = useReportContext();
  const { environments } = useGlobalContext();

  const vrtData = getVrtData(environments[environmentName], fileId, testId);
  const { completeBaselinePath, completeDiffPath, completeLatestPath } = vrtData;

  return (
    <Wrapper>
      <Details>
        <TabsRoot defaultValue="Diff">
          <TabsList aria-label="Manage your Tests">
            <TabsTrigger value="Diff">Baseline and Diff</TabsTrigger>
            <TabsTrigger value="Latest">Baseline and Latest</TabsTrigger>
          </TabsList>
          <Tabs.Content className="TabsContent" value="Diff">
            <Error>
              <ImageContainer imageType="Baseline" imgPath={completeBaselinePath} />
              <ImageContainer imageType="Diff" imgPath={completeDiffPath} />
            </Error>
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="Latest">
            <Error>
              <ImageContainer imageType="Baseline" imgPath={completeBaselinePath} />
              <ImageContainer imageType="Latest" imgPath={completeLatestPath} />
            </Error>
          </Tabs.Content>
        </TabsRoot>
      </Details>
    </Wrapper>
  );
};

export default VRTView;
