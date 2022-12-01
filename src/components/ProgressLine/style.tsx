import styled from 'styled-components';

interface WrapperProps {
  backgroundColor: string;
}

interface GraphProps extends WrapperProps {
  width: number;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: 4px;
  background-color: var(${(props) => props.backgroundColor});
`;
export const Graph = styled.div<GraphProps>`
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
