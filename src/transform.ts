export const transformNightwatchReport = () => {
  return {
    stats: getSuiteStats(),
    metadata: getReportMetadata()
  };
};

const getSuiteStats = () => {
  return window.nightwatchReport.stats;
};

const getReportMetadata = () => {
  return window.nightwatchReport.metadata;
};
