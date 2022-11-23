import React from 'react'
import styled from 'styled-components'
import Analytics from './Analytics'
import EnvironmentReport from './EnvironmentReport'

const Summary = () => {
  return (
    <Wrapper>
      <Header>
        <Title>
          Summary
          <SubTitle>(Executed 216 tests in 5 environments)</SubTitle>
        </Title>
        
        <Link href='#!'>Hide summary</Link>
      </Header>
      <Analytics passed={20} failed={10} skipped={10} />
      <EnvironmentReport />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: var(--color-neutrals-50);
  border-radius: 0 0 8px 8px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 12px 20px;
  flex: 1;
  margin: 0 20px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`

const Title = styled.h1`
  display: flex;
  font-size: calc(20 / 16 * 1rem);
  line-height: calc(32 / 16 * 1rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-neutrals-100);
`

const SubTitle = styled.p`
  font-size: 10px;
`

const Link = styled.a`
  color: var(--color-blue-60);
`


export default Summary
