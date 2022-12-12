import React from 'react';
import BaselineVrt from '../BaselineVrt'
import { Error, Details} from './style';
import Header from '../TestCaseView/Header';
import { Actions, ExpandAll, Left, Right, Wrapper } from '../TestData/style';
import Search from '../Search';

type Props = {
    baseline_img: string;
    diff_img: string;
}
const TestDetailsVrt: React.FC<Props> = ({ baseline_img, diff_img }) => {
  return (
    <Wrapper>
        <Left>
          <Search placeholder="Spec, test, tag" />
          <Actions>
            <ExpandAll type="button">Expand all</ExpandAll>
          </Actions>
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