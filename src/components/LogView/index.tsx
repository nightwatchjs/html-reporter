import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React, { Fragment } from 'react';
import {
  Line,
  LineContent,
  LogWrapper,
  Pre,
  Request,
  RequestBlock,
  RequestText,
  Response,
  ResponseBlock,
  Time,
  Wrapper
} from './style';
import { getRequestBlockData } from './utils';
import { Virtuoso } from 'react-virtuoso';

type LogViewProps = {
  log: string[][];
};

const LogView: React.FC<LogViewProps> = ({ log }) => {
  return (
    <Wrapper>
      <LogWrapper>
        <Virtuoso
          data={log}
          totalCount={log?.length}
          itemContent={(index, logArr) => {
            const [date, requestData, response] = logArr;
            const [method, text] = getRequestBlockData(requestData);

            return (
              requestData && (
                <Fragment key={index}>
                  <RequestBlock>
                    <Time>{String(new Date(date).toLocaleTimeString())}</Time>
                    <RequestText>
                      {method.includes('Request') ? (
                        <Request>{method}</Request>
                      ) : (
                        <Response>{method}</Response>
                      )}
                      {text}
                    </RequestText>
                  </RequestBlock>
                  <ResponseBlock>
                    <Highlight
                      {...defaultProps}
                      theme={theme}
                      code={String(response.replaceAll('&#39;', "'"))}
                      language="jsx"
                    >
                      {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <Pre className={className} style={style}>
                          {tokens.map((line, i) => (
                            <Line key={i} {...getLineProps({ line, key: i })}>
                              <LineContent>
                                {line.map((token, key) => (
                                  <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                              </LineContent>
                            </Line>
                          ))}
                        </Pre>
                      )}
                    </Highlight>
                  </ResponseBlock>
                </Fragment>
              )
            );
          }}
        />
      </LogWrapper>
    </Wrapper>
  );
};

export default LogView;
