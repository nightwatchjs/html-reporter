import styled from 'styled-components';
import Header from './components/Header';
import Summary from './components/Summary';

function Report() {
  return (
    <>
      <Header />
      <Wrapper>
        <Summary />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export default Report;
