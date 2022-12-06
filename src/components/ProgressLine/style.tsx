import styled from 'styled-components';

interface WrapperProps {
  backgroundColor: string;
}

interface GraphProps extends WrapperProps {
  width: number;
}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  height: calc(4 / 16 * 1rem);
  background-color: var(${(props) => props.backgroundColor});
`;
export const Graph = styled.div<GraphProps>`
  transition: width 2s;
  width: ${(props) => props.width}%;
  background-color: var(${(props) => props.backgroundColor});

  &:first-of-type {
    border-radius: var(--border-radius-3) 0 0 var(--border-radius-3);
  }
  &:last-of-type {
    border-radius: 0 var(--border-radius-3) var(--border-radius-3) 0;
  }
`;
