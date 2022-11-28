import React from 'react';
import styled from 'styled-components';

const ApproveAll = () => {
  return (
    <Wrapper>
     <Summary>
        <Text>
            5 changes detected
        </Text>
        <Button>
            Approve All
        </Button>
     </Summary>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  background: var(--color-grey-10);
  border-bottom: 1px solid #DDDDDD;
`;

const Summary = styled.div`
  display: flex;
  height: 40px;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-100);
  line-height: var(--line-height-20);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-semi-light);
`;

const Button = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 8px;
  background: #68B300;    
  border: 1px solid #68B300;
  border-radius: 4px;

  // button text style
  color: #FFFFFF;
  line-height: var(--line-height-24);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-semi-light);

`;

export default ApproveAll;
