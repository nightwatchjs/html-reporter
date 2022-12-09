import React, { useState } from 'react';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useReportContext } from '../../hooks/ReportContext';
import { getFailedTestsId } from '../TestData/utils';
import AccordionItems from './AccordionItem';
import { AccordionRoot } from './style';
import { TestFileViewProps } from './types';

const TestFileView: React.FC<TestFileViewProps> = ({ query, expanded, setExpanded, data }) => {
  const { environmentName } = useReportContext();
  const { environments } = useGlobalContext();

  const { pass, fail, skip } = data;

  return (
    // FIXME: TODO: Add Virtuso
    <AccordionRoot type="multiple" value={expanded} onValueChange={(data) => setExpanded(data)}>
      {fail && (
        <AccordionItems
          data={fail}
          query={query}
          expandedIds={expanded}
          failedIds={getFailedTestsId(environments[environmentName])}
        />
      )}
      {skip && (
        <AccordionItems
          data={skip}
          query={query}
          expandedIds={expanded}
          failedIds={getFailedTestsId(environments[environmentName])}
        />
      )}
      {pass && (
        <AccordionItems
          data={pass}
          query={query}
          expandedIds={expanded}
          failedIds={getFailedTestsId(environments[environmentName])}
        />
      )}
    </AccordionRoot>
  );
};

export default TestFileView;
