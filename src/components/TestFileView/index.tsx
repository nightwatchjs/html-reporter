import React from 'react';
import { Virtuoso } from 'react-virtuoso';
import { IFileStats } from '../../transform';
import AccordionItems from './AccordionItem';
import { AccordionRoot } from './style';
import { TestFileViewProps } from './types';
import { filterData } from './util';

const TestFileView: React.FC<TestFileViewProps> = ({
  query,
  expanded,
  setExpanded,
  data,
  setTabValue
}) => {
  const { pass, fail, skip } = data;

  const flattenedData = [
    ...((fail as IFileStats[]) || []),
    ...((skip as IFileStats[]) || []),
    ...((pass as IFileStats[]) || [])
  ];
  const filteredData = filterData(flattenedData, query);

  return (
    <AccordionRoot type="multiple" value={expanded} onValueChange={(data) => setExpanded(data)}>
      <Virtuoso
        data={filteredData}
        itemContent={(index, testFile) => {
          return (
            <AccordionItems
              key={index}
              file={testFile}
              expandedIds={expanded}
              setTabValue={setTabValue}
            />
          );
        }}
      />
    </AccordionRoot>
  );
};

export default TestFileView;
