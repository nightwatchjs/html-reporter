import React from 'react';
import { Error, Wrapper, Details } from './style';
import BaselineVrt from '../BaselineVrt';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useReportContext } from '../../hooks/ReportContext';
import { IVrtData } from '../../transform';
import { getVrtData } from './utils';
import { TabsList, TabsRoot, TabsTrigger } from '../TestStepsView/style';
import * as Tabs from '@radix-ui/react-tabs';
import { isVRT } from '../../constants';

const TestDetailsVrt: React.FC = () => {
  const { environmentName, fileId, testId } = useReportContext();
  const { environments } = useGlobalContext();
  const vrtData: IVrtData = getVrtData(environments[environmentName], fileId, testId);
  const {completeBaselinePath, completeDiffPath, completeLatestPath} = vrtData;
  return (
    <Wrapper>
      <Details>
        <TabsRoot defaultValue="Diff" gap={isVRT}>
          <TabsList aria-label="Manage your Tests">
            <TabsTrigger value="Diff">Baseline and Diff</TabsTrigger>
            <TabsTrigger value="Latest">Baseline and Latest</TabsTrigger>
          </TabsList>
          <Tabs.Content className="TabsContent" value="Diff">
            <Error>
              <BaselineVrt imageType="Baseline" imgPath={completeBaselinePath} />
              <BaselineVrt imageType="Diff" imgPath={completeDiffPath} />
            </Error>
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="Latest">
            <Error>
              <BaselineVrt imageType="Baseline" imgPath={completeBaselinePath} />
              <BaselineVrt imageType="Latest" imgPath={completeLatestPath} />
            </Error>
          </Tabs.Content>
        </TabsRoot>
      </Details>
    </Wrapper>
  );
};

export default TestDetailsVrt;
