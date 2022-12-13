import React from 'react';
import { Error, Wrapper, Details} from './style';
import BaselineVrt from '../BaselineVrt'
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useReportContext } from '../../hooks/ReportContext';
import { IVrtData } from '../../transform';
import { getVrtData } from './utils';

const TestDetailsVrt: React.FC = () => {
  const { environmentName, fileId, testId } = useReportContext();
  const { environments } = useGlobalContext();
  const vrtData: IVrtData = getVrtData(environments[environmentName], fileId, testId);

  return (
        <Wrapper>
            <Details>
                <Error>
                    <BaselineVrt imageType = 'Baseline' imgPath = {vrtData.completeBaselinePath}/>
                    <BaselineVrt imageType = 'diff' imgPath = {vrtData.completeDiffPath}/>
                </Error>
            </Details>
        </Wrapper>
    );
  };




export default TestDetailsVrt;