export const getPassedTestPercentage = (totalTests: number, passedTests: number): string => {
  return ((passedTests / totalTests) * 100).toFixed();
};

const regexHash: Record<string, RegExp> = {
  arrow_regex: /(<.*>)/g,
  double_quote: /("(\\.|[^"\\])*")/g,
  single_quote: /('.*')/g
};

export const wrapTextWithSpan = (
  text: string,
  colorClass: string[],
  regexToApply: string[]
): string => {
  const resultedString = regexToApply.reduce((text, regex, index) => {
    return text.replace(regexHash[regex], `<span class="${colorClass[index]}">$1</span>`);
  }, text);

  return resultedString;
};

const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, '0');
};

export const convertMsToTime = (
  milliseconds: number
): {
  readonly hours?: number;
  readonly minutes?: number;
  readonly seconds?: number;
  readonly paddedTime: string;
} => {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  return {
    ...(hours !== 0 && { hours }),
    ...(minutes !== 0 && { minutes }),
    ...(seconds !== 0 && { seconds }),
    ...{ paddedTime: `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}` }
  } as const;
};
