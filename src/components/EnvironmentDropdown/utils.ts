import Fuse from 'fuse.js';
import { EnvironmentData } from './types';

export const filterData = (data: EnvironmentData[], query: string): EnvironmentData[] => {
  const options = {
    keys: [
      'name',
      'meta.device',
      'meta.browserName',
      'meta.browserVersion',
      'meta.operatingSystemName',
      'meta.tags'
    ]
  };

  const fuse = new Fuse(data, options);

  const result = fuse.search(query);

  const filteredResult = result.reduce((result, test) => {
    result.push(test.item);
    return result;
  }, [] as EnvironmentData[]);

  return query.length > 0 ? filteredResult : data;
};
