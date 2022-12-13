import React, {useState} from 'react';
import { Error, Wrapper, Details} from './style';
import BaselineVrt from '../BaselineVrt'
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useReportContext } from '../../hooks/ReportContext';
import { IVrtData } from '../../transform';
import { getVrtData } from './utils';
import { TabsList, TabsRoot, TabsTrigger } from '../TestStepsView/style';
import * as Tabs from '@radix-ui/react-tabs';

const TestDetailsVrt: React.FC = () => {
  const { environmentName, fileId, testId } = useReportContext();
  const { environments } = useGlobalContext();
  const vrtData: IVrtData = getVrtData(environments[environmentName], fileId, testId);
  // Will be replaced 
const vrt = true;
  return (
        <Wrapper>
            <Details>
                    <TabsRoot defaultValue="tab1" vrt={vrt}>
                        <TabsList aria-label="Manage your Tests">
                            <TabsTrigger value="tab1">Baseline and Diff</TabsTrigger>
                            <TabsTrigger value="tab2">Baseline and Latest</TabsTrigger>
                        </TabsList>
                        <Tabs.Content className="TabsContent" value="tab1">
                        <Error>
                            <BaselineVrt imageType = 'Baseline' imgPath = {vrtData.completeBaselinePath} />
                            <BaselineVrt imageType = 'Diff' imgPath = {vrtData.completeDiffPath} />
                        </Error>
                        </Tabs.Content>
                        <Tabs.Content className="TabsContent" value="tab2">
                        <Error>
                            <BaselineVrt imageType = 'Baseline' imgPath = {vrtData.completeBaselinePath} />
                            <BaselineVrt imageType = 'Latest' imgPath = {vrtData.completeLatestPath} />
                        </Error>
                        </Tabs.Content>
                    </TabsRoot>
            </Details>
        </Wrapper>
    );
  };




export default TestDetailsVrt;