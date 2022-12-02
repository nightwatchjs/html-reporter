import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';
import { Pre, Line, LineNo, LineContent, Wrapper, CodeWrapper, Filename } from './style';
import { Segment } from '@mui/icons-material';

type CodeBlockProps = {
  filename: string;
  line_number: number;
  codeSnippet: string[];
};

const CodeBlock: React.FC<CodeBlockProps> = ({ filename, line_number, codeSnippet }) => {
  return (
    <Wrapper>
      <Filename>
        <Segment />
        {`${filename} : ${line_number}`}
      </Filename>
      <CodeWrapper>
        <Highlight {...defaultProps} theme={theme} code={codeSnippet.join('\n')} language="jsx">
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className}>
              {tokens.map((line, i) => (
                // TODO: Highlight based on the number from Nightwatch
                <Line highlight={i == 1} key={i} {...getLineProps({ line, key: i })}>
                  {/* TODO: Add 10/100 based on the line number from nightwatch -> {i + 10/100 + 1} */}
                  <LineNo>{i + 1}</LineNo>
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
      </CodeWrapper>
    </Wrapper>
  );
};

export default CodeBlock;
