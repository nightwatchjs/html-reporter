import Fuse from 'fuse.js';
import { IFileStats } from '../../transform';

export const filterData = (data: IFileStats[], query: string) => {
  const options = {
    keys: ['fileName', 'tests.testName']
  };

  const fuse = new Fuse(data, options);

  const result = fuse.search(query);

  const filteredResult = result.reduce((result, test) => {
    result.push(test.item);
    return result;
  }, [] as IFileStats[]);

  return query.length > 0 ? filteredResult : data;
};
