export const getPassedTestPercentage = (totalTests: number, passedTests: number): string => {
  return ((passedTests / totalTests) * 100).toFixed();
};

const regexHash: Record<string, RegExp> = {
  arrow_regex: /(<.*>)/g,
  double_quote: /("(\\.|[^"\\])*")/g,
  single_quote: /('.*')/g
};

export const wrapTextWithSpan = (text: string, colorClass: string[], regexToApply: string[]) => {
  const resultedString = regexToApply.reduce((text, regex, index) => {
    return text.replace(regexHash[regex], `<span class="${colorClass[index]}">$1</span>`);
  }, text);

  return resultedString;
};
