import CodeBlock from '../../src/components/CodeBlock';
import GlobalStyles from '../../src/components/GlobalStyles';

export default {
  title: 'CodeBlock Component',
  component: CodeBlock
};

export const CodeBlockComponent = (args) => (
  <>
    <GlobalStyles />
    <CodeBlock {...args} />
  </>
);

CodeBlockComponent.args = {
  filename: 'example.js',
  line_number: 10,
  codeSnippet: [
    { line: 1, code: 'const foo = () => {' },
    { line: 2, code: 'console.log("Hello, world!");' },
    { line: 3, code: '};' }
  ],
  file_path: 'example.js',
  tracePresent: true
};

CodeBlockComponent.test = async (browser, { component }) => {
  browser.expect(component).to.be.visible;
  browser.expect.element('a').text.to.contain('example.js:10');
  browser.expect.element('div:nth-child(1)').text.to.contain('const foo = () => {');
  browser.expect.element('div:nth-child(2)').text.to.contain('console.log("Hello, world!");');
  browser.expect.element('div:nth-child(3)').text.to.contain('};');
};
