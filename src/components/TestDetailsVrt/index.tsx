import React from 'react';
import styled from 'styled-components';
import ImageVrt from '../ImageVrt';

type Props = {
    baseline_img: string;
    diff_img: string;
}
const TestDetailsVrt: React.FC<Props> = ({ baseline_img, diff_img }) =>   {
  return (
    <Wrapper>
        <Header>

        </Header>
        <Details>
            <Error>
                <Baseline>
                    <Filters>
                        Baseline
                    </Filters>
                    <ImageVrt img_path = {baseline_img}/>
                </Baseline>
                <Baseline>
                    <Filters>
                        Diff
                    </Filters>
                    <ImageVrt img_path = {diff_img}/>
                </Baseline>
            </Error>
        </Details>
    </Wrapper>
  );
};
const Filters = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 0px 4px 12px;
    gap: 12px;
    width: 426.5px;
    height: 28px;
    background: var(--color-grey-30);

    color: var(--color-grey-90);
    line-height: var(--line-height-20);
    font-size: var(--font-size-12);
    font-weight: var(--font-weight-semi-light);
`;
const Baseline = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 12px 12px;
    gap: 12px;
    width: 450.5px;
    height: 790.44px;
    border: 1px solid var(--color-grey-50);
`;
const Error = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;  
    width: 921px;
    height: 790.44px;
    left: 12px;
    top: 10px;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 945px;
    height: 934.44px;
    background: var(--color-grey-10);
    border-left: 1px solid var(--color-grey-40);
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 20px 12px 0px;
    gap: 8px;
    width: 945px;
    height: 132px;
    background: rgba(244, 237, 232, 0.4);
    border-bottom: 1px solid var(--color-grey-40);
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 12px 12px;
    gap: 12px;
    width: 945px;
    height: 802.44px;
    isolation: isolate;
`;

export default React.memo(TestDetailsVrt);