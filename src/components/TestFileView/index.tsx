import React, { useState } from 'react';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useReportContext } from '../../hooks/ReportContext';
import AccordionItems from './AccordionItem';
import { AccordionRoot } from './style';
import { TestFileViewProps } from './types';

const TestFileView: React.FC<TestFileViewProps> = ({ query }) => {
  const { environmentName, fileId } = useReportContext();
  const { environments } = useGlobalContext();

  const {
    files: { pass, fail, skip }
  } = environments[environmentName];

  const [failed, setFailed] = useState(['item-1', 'item-2']);

  return (
    // FIXME: TODO: Add Virtuso
    <AccordionRoot type="multiple" value={failed} onValueChange={(data) => setFailed(data)}>
      {fail && <AccordionItems data={fail} query={query} />}
      {skip && <AccordionItems data={skip} query={query} />}
      {pass && <AccordionItems data={pass} query={query} />}
    </AccordionRoot>
  );
};

export default TestFileView;
