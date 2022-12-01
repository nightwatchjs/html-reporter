import styled from 'styled-components';

type SeparatorProps = {
  borderColor?: string;
  height?: number;
};

export default styled.div<SeparatorProps>`
  user-select: none;
  width: 0;
  height: ${(props) => props.height ?? 20}px;
  border-right: 1px solid var(${(props) => props.borderColor ?? '--color-grey-80'});
`;
