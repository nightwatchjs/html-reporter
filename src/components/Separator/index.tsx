import styled from 'styled-components';

type SeparatorProps = {
  borderColor?: string;
  height?: number;
};

export default styled.div<SeparatorProps>`
  user-select: none;
  width: 0;
  height: calc(${(props) => props.height ?? 20} / 16 * 1rem);
  border-right: var(--border-1) solid var(${(props) => props.borderColor ?? '--color-grey-80'});
`;
