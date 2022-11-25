import styled from 'styled-components';

interface SpacerProps {
  size: number;
}

export default styled.div<SpacerProps>`
  min-width: ${(props) => props.size}px;
  min-height: ${(props) => props.size}px;
`;
