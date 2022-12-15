import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';
import { Segment } from '../../icons';
import Tooltip from '../Tooltip';
import { CodeWrapper, Filename, Line, LineContent, LineNo, Link, Pre, Wrapper } from './style';
import { CodeSnippet } from '../../types/nightwatch';
import { destructCodeBlock } from './utils';

type CodeBlockProps = {
  filename: string;
  line_number: number;
  codeSnippet: CodeSnippet[];
  file_path: string;
  tracePresent?: boolean;
};

const CodeBlock: React.FC<CodeBlockProps> = ({
  filename,
  line_number,
  codeSnippet,
  file_path,
  tracePresent
}) => {
  const { code, line: lineNumbers } = destructCodeBlock(codeSnippet);

  return (
    <Wrapper shrink={tracePresent}>
      <Filename>
        <Segment />
        <Tooltip content="Open in IDE">
          <Link
            href={`vscode://file/${file_path}:${line_number}:1`}>{`${filename}:${line_number}`}</Link>
        </Tooltip>
      </Filename>
      <CodeWrapper>
        <Highlight {...defaultProps} theme={theme} code={code.join('\n')} language="jsx">
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className}>
              {tokens.map((line, i) => (
                <Line
                  highlight={lineNumbers[i] === line_number}
                  key={i}
                  {...getLineProps({ line, key: i })}>
                  <LineNo>{lineNumbers[i]}</LineNo>
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
