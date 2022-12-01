import styled from 'styled-components';
import { TimerOutlined } from '../../icons/index';
export const Wrapper = styled.article`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const TimerIconWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Time = styled.time`
  font-weight: var(--font-weight-semi-light);
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  color: var(${(props) => props.color});
`;

export const TimerIcon = styled(TimerOutlined)`
  font-size: var(--font-size-16);
  color: var(--color-grey-90);
`;
