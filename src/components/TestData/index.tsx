import React, { useState } from 'react';
import TestFileView from '../TestFileView';
import FilterDropdown from '../FilterDropdown';
import Search from '../Search';
import TestCaseView from '../TestCaseView';
import TestStatusBar from '../TestStatusBar';
import { Actions, ExpandAll, Left, Right, TestDetailsWrapper, Wrapper } from './style';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useReportContext } from '../../hooks/ReportContext';
import { getAllExpandedFileIds, getFailedTestsId } from './utils';

const vrtReport = () => {
  const vrt = true;
  if (!vrt) {
    return <TestStatusBar />
  }
}

const TestData: React.FC = () => {
  const { environments } = useGlobalContext();
  const { environmentName } = useReportContext();

  const [query, setQuery] = useState<string>('');
  const [expanded, setExpanded] = useState<string[]>(
    getFailedTestsId(environments[environmentName])
  );
  const [filterContext, setFilterContext] = useState('All Tests');

  const {
    files: { pass, fail, skip }
  } = environments[environmentName];

  const filterData = () => {
    switch (filterContext) {
      case 'Passed':
        return { pass };
      case 'Failed':
        return { fail };
      case 'Skipped':
        return { skip };

      default:
        return { pass, fail, skip };
    }
  };

  return (
    <Wrapper>
      {vrtReport()}
      <TestDetailsWrapper>
        <Left>
          <Search
            placeholder="Spec, test"
            onChange={(event) => setQuery((event.target as HTMLInputElement).value)}
          />
          <Actions>
            <ExpandAll
              type="button"
              onClick={() => setExpanded(getAllExpandedFileIds(environments[environmentName]))}>
              Expand all
            </ExpandAll>
            <FilterDropdown filterContext={filterContext} setFilterContext={setFilterContext} />
          </Actions>
          <TestFileView
            query={query}
            expanded={expanded}
            setExpanded={setExpanded}
            data={filterData()}
          />
        </Left>
        <Right>
          <TestCaseView />
        </Right>
      </TestDetailsWrapper>
    </Wrapper>
  );
};

export default TestData;
