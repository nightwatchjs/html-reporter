import styled, { css } from 'styled-components';

type Props = {
  highlight: boolean;
};

type WrapperProps = {
  shrink?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-semi-light);
  background-color: var(--color-grey-20);
  overflow: auto;

  ${(props) =>
    props.shrink &&
    css`
      max-width: calc(388 / 16 * 1rem);
      overflow: auto;
    `}
`;

export const Filename = styled.div`
  background-color: var(--color-grey-40);
  padding: var(--padding-4) var(--padding-8);
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
  margin: var(--margin-12) var(--margin-8) var(--margin-20) var(--margin-8);
`;

export const Pre = styled.pre`
  text-align: left;
  padding: 0 var(--padding-12);

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

export const Link = styled.a`
  color: var(--color-blue-60);
`;
