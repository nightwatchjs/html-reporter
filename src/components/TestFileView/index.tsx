import React from 'react';
import AccordionItems from './AccordionItem';
import { AccordionRoot } from './style';
import { TestFileViewProps } from './types';

const TestFileView: React.FC<TestFileViewProps> = ({ query, expanded, setExpanded, data }) => {
  const { pass, fail, skip } = data;

  return (
    // FIXME: TODO: Add Virtuso
    <AccordionRoot type="multiple" value={expanded} onValueChange={(data) => setExpanded(data)}>
      {fail && <AccordionItems data={fail} query={query} expandedIds={expanded} />}
      {skip && <AccordionItems data={skip} query={query} expandedIds={expanded} />}
      {pass && <AccordionItems data={pass} query={query} expandedIds={expanded} />}
    </AccordionRoot>
  );
};

export default TestFileView;
