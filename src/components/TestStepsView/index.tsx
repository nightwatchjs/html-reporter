import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useReportContext } from '../../hooks/ReportContext';
import LogView from '../LogView';
import { getTestsSteps } from '../SpecMetaData/utils';
import { TabValueProps } from '../TestCaseView';
import TestDetailsView from '../TestDetailsView';
import { TabsList, TabsRoot, TabsTrigger } from './style';

const TestStepsView: React.FC<TabValueProps> = ({ tabValue, setTabValue }) => {
  const { environmentName, fileId, testId } = useReportContext();
  const { environments } = useGlobalContext();

  const { testSteps, httpLog, traceView } = getTestsSteps(
    environments[environmentName],
    fileId,
    testId
  );

  return (
    <TabsRoot value={tabValue} onValueChange={(value) => setTabValue(value)}>
      <TabsList aria-label="Manage your Tests">
        <TabsTrigger value="test-details">Test Details</TabsTrigger>
        <TabsTrigger value="http-log">Raw HTTP log</TabsTrigger>
        {/* <TabsTrigger value="selenium-log">Selenium logs</TabsTrigger> */}
      </TabsList>
      <Tabs.Content value="test-details">
        <TestDetailsView testStepsData={testSteps} tracePresent={traceView} />
      </Tabs.Content>
      <Tabs.Content value="http-log">
        <LogView log={httpLog} />
      </Tabs.Content>
      {/* <Tabs.Content value="selenium-log">
        <LogWrapper>
          <SeleniumLog src={seleniumLog} frameBorder="0" />
        </LogWrapper>
      </Tabs.Content> */}
    </TabsRoot>
  );
};

export default TestStepsView;
