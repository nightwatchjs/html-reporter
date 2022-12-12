import React, { useState } from 'react';
import BaselineVrt from '../BaselineVrt'
import { Error, Details} from './style';
import Header from '../TestCaseView/Header';
import { Actions, ExpandAll, Left, Right, Wrapper } from '../TestData/style';
import Search from '../Search';
import TestFileView from '../TestFileView';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useReportContext } from '../../hooks/ReportContext';

type Props = {
    baseline_img: string;
    diff_img: string;
}
const TestDetailsVrt: React.FC<Props> = ({ baseline_img, diff_img }) => {

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
        <Left>
          <TestFileView
            query={query}
            expanded={expanded}
            setExpanded={setExpanded}
            data={filterData()}
          />
        </Left>
        <Right>
        <Header />
        <Details>
            <Error>
                <BaselineVrt imageType = 'Baseline' imgPath = {baseline_img}/>
                <BaselineVrt imageType = 'diff' imgPath = {diff_img}/>
            </Error>
        </Details>
        </Right>
    </Wrapper>
  );
};


export default React.memo(TestDetailsVrt);