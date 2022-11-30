import styled from 'styled-components';

export const Wrapper = styled.article`
  padding: 12px 20px;
  border: 1px solid var(--color-grey-50);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h2`
  line-height: var(--line-height-24);
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-grey-100);
  opacity: 0.75;
`;

export const Status = styled.div`
  width: 92px;
  height: 92px;
  border: 2px solid var(--color-blue-40);
  background: var(--color-blue-10);
  border-radius: 50%;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const PercentageText = styled.h2`
  font-weight: var(--font-weight-semi-light);
  font-size: var(--font-size-16);
  line-height: var(--line-height-24);
`;

export const PassedText = styled.p`
  font-weight: var(--font-weight-semi-light);
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  color: var(--color-grey-90);
`;

export const TestStatusWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  gap: 8px;
  justify-content: flex-end;
`;

export const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
  background: var(--color-grey-20);
  border: 1px solid var(--color-grey-40);
  border-radius: 4px;
  min-height: 40px;
  padding: 7px;
`;

export const MetricWrapper = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: baseline;
`;

export const MetricCount = styled.h3`
  font-weight: var(--font-weight-semi-light);
  font-size: var(--font-size-16);
  line-height: var(--line-height-24);
  color: var(--color-grey-100);
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalSpecCountWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const TestCount = styled.h2`
  font-weight: var(--font-weight-semi-light);
  font-size: var(--font-size-26);
  line-height: var(--line-height-40);
  color: var(--color-grey-100);
`;
