import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.article)`
  display: flex;
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: var(--color-grey-50);
  border-radius: 0 0 8px 8px;
  padding: 12px 20px;
  margin: 0 20px;
  flex-direction: row;
  flex-wrap: wrap;
  background: var(--color-grey-10);
  width: 100%;
  max-width: 1240px;
`;

export const AnalyticsWrapper = styled(motion.div)`
  flex: 1 1 0%;
  margin-right: 20px;
`;
export const EnvironmentReportWrapper = styled(motion.div)`
  flex: 1 1 0%;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  line-height: var(--line-height-32);
  margin-bottom: 12px;
`;

export const Title = styled.h1`
  font-size: calc(20 / 16 * 1rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-grey-100);
  align-self: baseline;
`;

export const SubTitle = styled.p`
  font-size: 10px;
  margin-right: auto;
  align-self: baseline;
  font-size: calc(12 / 16 * 1rem);
  font-weight: 400;
`;

export const Link = styled(motion.a)`
  color: var(--color-blue-60);
`;
