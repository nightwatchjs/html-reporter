import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { TabsList, TabsRoot, TabsTrigger } from './style';
import TestDetailsView from '../TestDetailsView';

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
        <p className="Text">Tab 2</p>
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="tab3">
        <p className="Text">Tab 3</p>
      </Tabs.Content>
    </TabsRoot>
  );
};

export default TestStepsView;
