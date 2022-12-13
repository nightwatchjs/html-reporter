import styled from 'styled-components'; 

export const Error = styled.div`
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
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 945px;
    height: 934.44px;
    background: var(--color-grey-10);
    border-left: 1px solid var(--color-grey-40);
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 12px 12px;
    gap: 12px;
    width: 945px;
    height: 802.44px;
    isolation: isolate;
`;