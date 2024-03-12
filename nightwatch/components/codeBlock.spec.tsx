import CodeBlock from '../../src/components/CodeBlock';
import { CodeSnippet } from '../../src/types/nightwatch';
type CodeBlockProps = {
  filename: string;
  line_number: number;
  codeSnippet: CodeSnippet[];
  file_path: string;
  tracePresent?: boolean;
};
export default {
  title: 'Code Block Component',
  component: CodeBlock
};
const testProps: CodeBlockProps = {
  filename: 'chromeCDP_example.js',
  line_number: 10,
  codeSnippet: [
    {
      line_number: 8,
      code: '});'
    },
    {
      line_number: 9,
      code: ''
    },
    {
      line_number: 10,
      code: "browser.assert.deepStrictEqual(Object.keys(dom), ['documents', 'strings']);"
    },
    {
      line_number: 11,
      code: '});'
    },
    {
      line_number: 12,
      code: '});'
    }
  ],
  file_path: '/Users/vaibhavsingh/Dev/nightwatch/examples/tests/chromeCDP_example.js'
};

export const CodeBlockComponent = () => (
  <>
    <CodeBlock {...testProps} />
  </>
);
CodeBlockComponent.test = async (browser, { component }) => {
  browser.expect(component).to.be.visible;
  browser.expect(component).text.to.contain(`${testProps.filename}:${testProps.line_number}`);
  testProps.codeSnippet.forEach(({ line_number, code }) => {
    if (!code) return browser.expect(component).text.to.contain(`${line_number}`);
    browser.expect(component).text.to.contain(`${line_number} ${code}`);
  });
};
