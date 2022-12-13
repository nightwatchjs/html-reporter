import styled from 'styled-components';

export const Filters = styled.div `
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
export const Baseline = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 12px 12px;
    gap: 12px;
    width: 450.5px;
    height: 790.44px;
    border: 1px solid var(--color-grey-50);
`;