import styled, { css } from 'styled-components';

type Props = {
  highlight: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-semi-light);
  background-color: var(--color-grey-20);
`;

export const Filename = styled.div`
  background-color: var(--color-grey-40);
  padding: 4px 8px;
  color: var(--color-blue-60);
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CodeWrapper = styled.div`
  font-family: monospace;
  text-align: center;
  text-align: center;
  color: var(--color-grey-100);
  margin: 12px 8px 20px 8px;
  width: 100%;
`;

export const Pre = styled.pre`
  text-align: left;
  padding: 0 12px;
  overflow: scroll;
  /* background-color: var(--color-grey-20); */

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const Line = styled.div<Props>`
  display: table-row;

  ${(props) =>
    props.highlight &&
    css`
      background-color: var(--color-red-10);
      color: var(--color-red-60);
    `}
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;
