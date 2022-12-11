import { IFileStats, ITestStats } from '../../transform';

const filterTests = (data: ITestStats[], query: string) => {
  return data.filter((test) => {
    if (test.testName.toLowerCase().includes(query.toLowerCase())) {
      return data;
    }
  });
};

export const filterData = (data: IFileStats[], query: string) => {
  const filteredData = data.filter((value) => {
    if (query === '') {
      return data;
    }

    if (value.fileName.toLowerCase().includes(query.toLowerCase())) {
      return data;
    }

    if (filterTests(value.tests, query).length > 0) {
      return data;
    }
  });

  return filteredData;
};

// FIXME: Remove this block if not needed
// export const getCountOfAllTests = (pass?: number, fail?: number, skip?: number): number => {
//   let count = 0;
//   if (pass !== undefined) {
//     count += pass;
//   }
//   if (fail !== undefined) {
//     count += fail;
//   }
//   if (skip !== undefined) {
//     count += skip;
//   }
//   return count;
// };
