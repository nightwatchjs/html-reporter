export const getTestPercentage = (
  total: number,
  passed: number,
  failed: number,
  skipped: number
) => {
  return {
    passed: (passed / total) * 100,
    failed: (failed / total) * 100,
    skipped: (skipped / total) * 100
  };
};
