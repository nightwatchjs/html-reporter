export const transformNightwatchReport = () => {
  return {
    stats: getSuiteStats()
  };
};

const getSuiteStats = () => {
  return window.nightwatchReport.stats;
};
