import styled, { css } from 'styled-components';

interface TextProps {
  fontSize: number;
  lineHight: number;
  color?: string;
  transformText?: boolean;
  fontWeight?: string;
}

export const Text = styled.p<TextProps>`
  font-weight: var(${(props) => props.fontWeight ?? '--font-weight-semi-light'});
  font-size: var(--font-size-${(props) => props.fontSize});
  line-height: var(--line-height-${(props) => props.lineHight});
  color: var(--color-${(props) => props.color ?? 'grey-90'});
  ${(props) =>
    props.transformText &&
    css`
      text-transform: lowercase;

      &::first-letter {
        text-transform: uppercase;
      }
    `}
`;
