import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import LogView from '../LogView';
import TestDetailsView from '../TestDetailsView';
import { TabsList, TabsRoot, TabsTrigger } from './style';

const TestStepsView: React.FC = () => {
  return (
    <TabsRoot defaultValue="tab1">
      <TabsList aria-label="Manage your Tests">
        <TabsTrigger value="tab1">Test Details</TabsTrigger>
        <TabsTrigger value="tab2">Raw HTTP log</TabsTrigger>
        <TabsTrigger value="tab3">Selenium logs</TabsTrigger>
      </TabsList>
      <Tabs.Content className="TabsContent" value="tab1">
        <TestDetailsView />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="tab2">
        <LogView />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="tab3">
        <LogView />
      </Tabs.Content>
    </TabsRoot>
  );
};

export default TestStepsView;
