import styled from 'styled-components';
import { TimerOutlined } from '../../icons/index';

type FontProps = {
  fontSize?: string;
};

type WrapperProps = {
  gap?: number;
};

export const Wrapper = styled.article<WrapperProps>`
  display: flex;
  gap: ${(props) => props.gap ?? 6}px;
  align-items: center;
`;

export const TimerIconWrapper = styled.div<FontProps>`
  display: flex;
  align-items: baseline;
  font-size: var(${(props) => props.fontSize ?? `--font-size-16`});
`;

export const Time = styled.time<FontProps>`
  font-weight: var(--font-weight-semi-light);
  font-size: var(${(props) => props.fontSize ?? `--font-size-14`});
  line-height: var(--line-height-20);
  color: var(${(props) => props.color});
`;

export const TimerIcon = styled(TimerOutlined)`
  color: var(--color-grey-90);
`;
