import React from 'react';
import BaselineVrt from '../BaselineVrt'
import { Error, Wrapper, Details} from './style';
import Header from '../TestCaseView/Header';

type Props = {
    baseline_img: string;
    diff_img: string;
}
const TestDetailsVrt: React.FC<Props> = ({ baseline_img, diff_img }) => {
  return (
    <Wrapper>
        <Header />
        <Details>
            <Error>
                <BaselineVrt imageType = 'Baseline' imgPath = {baseline_img}/>
                <BaselineVrt imageType = 'diff' imgPath = {diff_img}/>
            </Error>
        </Details>
    </Wrapper>
  );
};


export default React.memo(TestDetailsVrt);