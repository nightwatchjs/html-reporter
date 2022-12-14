import React from 'react';
import { useReportContext } from '../../hooks/ReportContext';
import TestBlock from '../TestBlock';
import { AccordionContent } from './AccordionContent';
import { AccordionTrigger } from './AccordionTrigger';
import { AccordionItem } from './style';
import { AccordionItemsProps } from './types';
import { filterData } from './util';

const AccordionItems: React.FC<AccordionItemsProps> = ({ data, query, failedIds, expandedIds }) => {
  const { testId, setTestId, setFileId } = useReportContext();
  const filterTestData = filterData(data, query);

  return (
    <>
      {filterTestData.map((file) => (
        <AccordionItem key={file.key} value={file.key}>
          <AccordionTrigger
            failed={failedIds.includes(file.key)}
            value={file.key}
            expandedIds={expandedIds}
          >
            {file.fileName}
          </AccordionTrigger>
          <AccordionContent>
            {file.tests.map((test) => {
              return (
                <TestBlock
                  key={test.key}
                  status={test.status}
                  highlightBlock={test.key === testId}
                  fileKey={file.key}
                  testKey={test.key}
                  setTestId={setTestId}
                  setFileId={setFileId}
                >
                  {test.testName}
                </TestBlock>
              );
            })}
          </AccordionContent>
        </AccordionItem>
      ))}
    </>
  );
};

export default AccordionItems;
