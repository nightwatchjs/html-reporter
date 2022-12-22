import Fuse from 'fuse.js';
import { createElement } from 'react';
import { IFileStats, Status } from '../../transform';
import { CancelIcon, CheckCircleIcon, RemoveCircleIcon } from './style';

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

export const statusIcon = (status: Status) => {
  switch (status) {
    case 'pass':
      return createElement(CheckCircleIcon);
    case 'fail':
      return createElement(CancelIcon);
    case 'skip':
      return createElement(RemoveCircleIcon);
  }
};
