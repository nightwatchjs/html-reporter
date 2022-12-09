import React from 'react';
import TestBlock from '../TestBlock';
import { AccordionContent } from './AccordionContent';
import { AccordionTrigger } from './AccordionTrigger';
import { AccordionItem } from './style';
import { AccordionItemsProps } from './types';
import { filterData } from './util';

const AccordionItems: React.FC<AccordionItemsProps> = ({ data, query }) => {
  const filterTestData = filterData(data, query);

  return (
    <>
      {filterTestData.map((file) => (
        <AccordionItem key={file.key} value="item-1">
          <AccordionTrigger failed={true} value="item-1">
            {file.fileName}
          </AccordionTrigger>
          <AccordionContent>
            {file.tests.map((test, index) => {
              return <TestBlock key={index}>{test.testName}</TestBlock>;
            })}
          </AccordionContent>
        </AccordionItem>
      ))}
    </>
  );
};

export default AccordionItems;
