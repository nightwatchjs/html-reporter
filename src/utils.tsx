import { Environments } from './transform';

export const getPassedTestPercentage = (totalTests: number, passedTests: number): string => {
  const passedPercentage = (passedTests / totalTests) * 100;
  return Number.isNaN(passedPercentage) ? '0' : passedPercentage.toFixed();
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
  readonly paddedTime: string;
  readonly time: {
    seconds?: number;
    minutes?: number;
    hours?: number;
  };
} => {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  return {
    ...{
      time: {
        ...(hours !== 0 && { hours }),
        ...(minutes !== 0 && { minutes }),
        seconds
      }
    },
    ...{ paddedTime: `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}` }
  } as const;
};

/**
 * ANSI colors/characters cleaning based on http://stackoverflow.com/questions/25245716/remove-all-ansi-colors-styles-from-strings
 */
export const cleanAnsi = (str: string): string => {
  if (!str) return '';

  return str.replace(
    // eslint-disable-next-line no-control-regex
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
    ''
  );
};

export const totalFailedVRTTests = (environments: Environments): number => {
  let count = 0;
  Object.keys(environments).forEach((envName) => {
    const files = environments[envName].files.fail;
    Object.keys(files).forEach((_, index) => {
      const testLength = files[index].tests.length;
      count += testLength;
    });
  });
  return count;
};
