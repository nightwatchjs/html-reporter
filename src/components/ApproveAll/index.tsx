import React from 'react';
import { Wrapper, Text } from './style';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { getChanges } from './utils';


const ApproveAll: React.FC = () => {
  const { environments } = useGlobalContext();
  const changes = getChanges(environments);
  return (
    <Wrapper>
     <Text>
        {changes} changes detected
    </Text>
    </Wrapper>
  );
};

export default ApproveAll;