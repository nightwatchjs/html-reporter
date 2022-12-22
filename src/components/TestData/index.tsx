import React, { useState } from 'react';
import TestFileView from '../TestFileView';
import FilterDropdown from '../FilterDropdown';
import Search from '../Search';
import TestCaseView from '../TestCaseView';
import TestStatusBar from '../TestStatusBar';
import { Actions, Left, Right, TestDetailsWrapper, ToggleRoot, Wrapper } from './style';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useReportContext } from '../../hooks/ReportContext';
import { getAllExpandedFileIds, getFailedTestsId } from './utils';
import { Text } from '../Text';
import { isVRT } from '../../constants';

const TestData: React.FC = () => {
  const { environments } = useGlobalContext();
  const { environmentName } = useReportContext();

  const [query, setQuery] = useState<string>('');
  const [expanded, setExpanded] = useState<string[]>(
    getFailedTestsId(environments[environmentName])
  );
  const [tabValue, setTabValue] = useState('test-details');
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
      {!isVRT && <TestStatusBar />}
      <TestDetailsWrapper>
        <Left>
          <Search
            placeholder="Spec, test"
            onChange={(event) => setQuery((event.target as HTMLInputElement).value)}
          />
          <Actions>
            <ToggleRoot
              onPressedChange={(pressed) =>
                pressed
                  ? setExpanded(getAllExpandedFileIds(environments[environmentName]))
                  : setExpanded([''])
              }>
              <Text color="grey-90" fontSize={12} lineHight={20}>
                Expand all
              </Text>
            </ToggleRoot>
            <FilterDropdown filterContext={filterContext} setFilterContext={setFilterContext} />
          </Actions>
          <TestFileView
            query={query}
            expanded={expanded}
            setExpanded={setExpanded}
            data={filterData()}
            setTabValue={setTabValue}
          />
        </Left>
        <Right>
          <TestCaseView tabValue={tabValue} setTabValue={setTabValue} />
        </Right>
      </TestDetailsWrapper>
    </Wrapper>
  );
};

export default TestData;
