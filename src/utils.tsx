export const getPassedTestPercentage = (totalTests: number, passedTests: number): string => {
  return ((passedTests / totalTests) * 100).toFixed();
};
