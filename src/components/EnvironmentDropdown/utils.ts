import { EnvironmentData } from './types';

export const filterData = (data: EnvironmentData[], query: string): EnvironmentData[] => {
  const filteredData = data.filter((value) => {
    if (query === '') {
      return data;
    }
    // Filter Browsers
    if (value.meta.browserName.toLowerCase().includes(query.toLowerCase())) {
      return data;
    }

    // Filter Devices
    if (value.meta.device.toLowerCase().includes(query.toLowerCase())) {
      return data;
    }

    // Filter Operating System
    if (value.meta.operatingSystemName.toLowerCase().includes(query.toLowerCase())) {
      return data;
    }

    // Filter Tags
    if (value.meta.tags[0].toLowerCase().includes(query.toLowerCase())) {
      return data;
    }

    // Filter Environment Name
    if (value.name.toLowerCase().includes(query.toLowerCase())) {
      return data;
    }
  });

  return filteredData;
};
