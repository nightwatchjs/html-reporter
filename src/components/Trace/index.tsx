import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import { Wrapper } from './style';
// FIXME: Common out styles
import { TabsList, TabsRoot, TabsTrigger } from '../TestStepsView/style';
import TraceData from '../TraceData';
const Trace: React.FC = () => {
  return (
    <Wrapper>
      <TabsRoot defaultValue="tab1">
        <TabsList aria-label="Manage your Tests">
          <TabsTrigger value="tab1">Before</TabsTrigger>
          <TabsTrigger value="tab2">After</TabsTrigger>
        </TabsList>
        <Tabs.Content value="tab1">
          <TraceData />
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <TraceData />
        </Tabs.Content>
      </TabsRoot>
    </Wrapper>
  );
};

export default Trace;
