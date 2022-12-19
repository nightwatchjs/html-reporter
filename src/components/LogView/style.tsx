import styled from 'styled-components';

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
  font-family: monospace;
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineContent = styled.span`
  display: table-cell;
`;

export const Wrapper = styled.article`
  margin: var(--margin-12);
  max-height: var(--log-view-height);
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const LogWrapper = styled.div`
  max-width: calc(913 / 16 * 1rem);
  overflow: auto;
  background-color: var(--list-color-secondary-background-10);
  padding: var(--padding-12);
  font-size: var(--font-size-12);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-semi-light);
  color: var(--color-grey-100);
  border-radius: var(--border-radius-4);
`;

export const RequestBlock = styled.div`
  display: flex;
  gap: var(--gap-20);
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const ResponseBlock = styled.div`
  display: block;
  background-color: var(--color-grey-10);
  border-radius: var(--border-radius-4);
`;

export const Request = styled.span`
  background-color: var(--color-green-20);
  padding: var(--padding-4);
  border-radius: var(--border-radius-3);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-16);
  color: var(--color-green-80);
`;

export const Response = styled.span`
  background-color: var(--color-orange-20);
  padding: var(--padding-4);
  border-radius: var(--border-radius-3);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-16);
  color: var(--color-orange-80);
`;

export const Time = styled.div`
  font-size: var(--font-size-12);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-bold);
  border-radius: var(--border-radius-3);
  padding: var(--padding-4);
  background-color: var(--color-grey-50);
`;

export const RequestText = styled.div`
  display: flex;
  gap: var(--gap-4);
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-semi-light);
  align-items: center;
`;
