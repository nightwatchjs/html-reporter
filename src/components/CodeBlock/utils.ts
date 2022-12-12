import { CodeSnippet } from '../../types/nightwatch';

export const destructCodeBlock = (codeSnippet: CodeSnippet[]) => {
  return codeSnippet.reduce(
    (result, testObj) => {
      result.line.push(testObj.line_number);
      result.code.push(testObj.code.trim());
      return result;
    },
    { code: [], line: [] } as { code: string[]; line: number[] }
  );
};
