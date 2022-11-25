import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = {
  visualPartition: {
    percentage: number;
    color: string;
  }[];
};

interface WrapperProps {
  backgroundColor: string;
}

interface GraphProps extends WrapperProps {
  width: number;
}

const ProgressLine: React.FC<Props> = ({ visualPartition }) => {
  const resetProgress = visualPartition.map(() => {
    return 0;
  });

  const [widths, setWidths] = useState(
    visualPartition.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualPartition.map((item) => {
          return item.percentage;
        })
      );
    });

    return () => {
      resetProgress;
    };
  }, [visualPartition]);

  return (
    <Wrapper backgroundColor={'--color-grey-10'}>
      {visualPartition.map(({ color }, index) => {
        return <Graph key={index} width={widths[index]} backgroundColor={color} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: 4px;
  background-color: var(${(props) => props.backgroundColor});
`;
const Graph = styled.div<GraphProps>`
  transition: width 2s;
  width: ${(props) => props.width}%;
  background-color: var(${(props) => props.backgroundColor});

  &:first-of-type {
    border-radius: 3px 0 0 3px;
  }
  &:last-of-type {
    border-radius: 0 3px 3px 0;
  }
`;

export default ProgressLine;
