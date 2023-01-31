import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.article)`
  display: flex;
  border-width: 0 var(--border-1) var(--border-1) var(--border-1);
  border-style: solid;
  border-color: var(--color-grey-50);
  border-radius: 0 0 var(--border-radius-8) var(--border-radius-8);
  padding: var(--padding-12) var(--padding-20);
  margin: 0 var(--margin-20);
  flex-direction: row;
  flex-wrap: wrap;
  background: var(--color-grey-10);
  width: 100%;
`;

export const AnalyticsWrapper = styled(motion.div)`
  flex: 1 1 0%;
  margin-right: var(--margin-20);
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: calc(158 / 16 * 1rem);
`;
export const EnvironmentReportWrapper = styled(motion.div)`
  flex: 1.45 1 0%;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  line-height: var(--line-height-32);
  margin-bottom: var(--margin-12);
`;

export const Title = styled.h1`
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-bold);
  color: var(--color-grey-100);
  align-self: baseline;
`;

export const SubTitle = styled.p`
  font-size: var(--font-size-12);
  margin-right: auto;
  align-self: baseline;
  font-weight: 400;
  margin-left: var(--margin-4);
`;

export const Link = styled(motion.a)`
  color: var(--color-blue-60);
`;
