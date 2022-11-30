import React, { useEffect, useState } from 'react';
import { Graph, Wrapper } from './style';

type Props = {
  visualPartition: {
    percentage: number;
    color: string;
  }[];
};

const ProgressLine: React.FC<Props> = ({ visualPartition }) => {
  const resetProgress = visualPartition.map(() => 0);

  const [widths, setWidths] = useState(resetProgress);

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualPartition.map((item) => {
          return item.percentage;
        })
      );
    });
  }, [visualPartition]);

  return (
    <Wrapper backgroundColor={'--color-grey-10'}>
      {visualPartition.map(({ color }, index) => (
        <Graph key={index} width={widths[index]} backgroundColor={color} />
      ))}
    </Wrapper>
  );
};

export default ProgressLine;
