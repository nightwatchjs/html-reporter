export const transformNightwatchReport = () => {
  return {
    stats: getSuiteStats(),
    metadata: getReportMetadata()
  };
};

export const transformNightwatchVrtReport = () => {
  return {
    data: {}
  };
};

const getSuiteStats = () => {
  return window.nightwatchReport.stats;
};

const getReportMetadata = () => {
  return window.nightwatchReport.metadata;
};
