import styled from 'styled-components';

type EnvironmentHeadingProps = {
  isDropdownTrigger?: boolean;
};

export const Content = styled.div`
  display: flex;
  gap: var(--gap-16);
  align-items: center;
  flex: 4;
`;

export const EnvironmentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-8);
  flex: 4;
`;

export const EnvironmentHeading = styled.h2<EnvironmentHeadingProps>`
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  font-weight: ${(props) => (props.isDropdownTrigger ? 'var(--font-weight-bold)' : 'inherit')};
  text-transform: capitalize;
`;
