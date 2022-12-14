import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useReportContext } from '../../hooks/ReportContext';
import LogView from '../LogView';
import { getTestsSteps } from '../SpecMetaData/utils';
import TestDetailsView from '../TestDetailsView';
import { LogWrapper, SeleniumLog, TabsList, TabsRoot, TabsTrigger } from './style';

const TestStepsView: React.FC = () => {
  const { environmentName, fileId, testId } = useReportContext();
  const { environments } = useGlobalContext();

  const { testSteps, httpLog, seleniumLog, traceView } = getTestsSteps(
    environments[environmentName],
    fileId,
    testId
  );

  return (
    <TabsRoot defaultValue="tab1">
      <TabsList aria-label="Manage your Tests">
        <TabsTrigger value="tab1">Test Details</TabsTrigger>
        <TabsTrigger value="tab2">Raw HTTP log</TabsTrigger>
        <TabsTrigger value="tab3">Selenium logs</TabsTrigger>
      </TabsList>
      <Tabs.Content className="TabsContent" value="tab1">
        <TestDetailsView testStepsData={testSteps} tracePresent={traceView} />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="tab2">
        <LogView log={httpLog} />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="tab3">
        <LogWrapper>
          <SeleniumLog src={seleniumLog} frameBorder="0" />
        </LogWrapper>
      </Tabs.Content>
    </TabsRoot>
  );
};

export default TestStepsView;
