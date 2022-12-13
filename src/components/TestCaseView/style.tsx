import styled, { css } from 'styled-components';
type WrapperProps = {
  vrt?: boolean;
}
export const Wrapper = styled.article<WrapperProps>`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.vrt &&
    css`
      gap: var(--gap-12);
  `}
`;

export const TestBody = styled.section`
  display: flex;
`;
