import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { useGlobalContext } from '../../hooks/GlobalContext';
import Analytics from './Analytics';
import EnvironmentReport from './EnvironmentReport';
import {
  AnalyticsWrapper,
  EnvironmentReportWrapper,
  Header,
  Link,
  SubTitle,
  Title,
  Wrapper
} from './style';

const Summary: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const {
    environments,
    stats: { total }
  } = useGlobalContext();

  const environmentCount = Object.keys(environments).length;

  return (
    <Wrapper
      animate={{ height: isOpen ? 54 : 230 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
    >
      <Header>
        <Title>Summary</Title>
        <SubTitle>{`(Executed ${total} tests in ${environmentCount} ${
          environmentCount > 1 ? 'environments' : 'environment'
        })`}</SubTitle>
        <AnimatePresence>
          <Link whileTap={{ opacity: 0, translateX: 2 }} href="#!" onClick={() => setOpen(!isOpen)}>
            {isOpen ? 'Show summary' : 'Hide summary'}
          </Link>
        </AnimatePresence>
      </Header>
      <AnimatePresence>
        <AnalyticsWrapper
          key={'Analytics'}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            visibility: isOpen ? 'hidden' : 'revert'
          }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
        >
          <Analytics />
        </AnalyticsWrapper>
        <EnvironmentReportWrapper
          key={'Environment'}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            visibility: isOpen ? 'hidden' : 'revert'
          }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
        >
          <EnvironmentReport />
        </EnvironmentReportWrapper>
      </AnimatePresence>
    </Wrapper>
  );
};

export default Summary;
