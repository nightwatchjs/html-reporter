import React from 'react';
import AccordionItems from './AccordionItem';
import { AccordionRoot } from './style';
import { TestFileViewProps } from './types';

const TestFileView: React.FC<TestFileViewProps> = ({
  query,
  expanded,
  setExpanded,
  data,
  setTabValue
}) => {
  const { pass, fail, skip } = data;

  return (
    // FIXME: TODO: Add Virtuso
    <AccordionRoot type="multiple" value={expanded} onValueChange={(data) => setExpanded(data)}>
      {fail && (
        <AccordionItems
          data={fail}
          query={query}
          expandedIds={expanded}
          setTabValue={setTabValue}
        />
      )}
      {skip && (
        <AccordionItems
          data={skip}
          query={query}
          expandedIds={expanded}
          setTabValue={setTabValue}
        />
      )}
      {pass && (
        <AccordionItems
          data={pass}
          query={query}
          expandedIds={expanded}
          setTabValue={setTabValue}
        />
      )}
    </AccordionRoot>
  );
};

export default TestFileView;
