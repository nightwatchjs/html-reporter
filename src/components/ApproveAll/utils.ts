import { Environments } from '../../transform';
export const getChanges = (environments: Environments): number => {
  let count = 0;
  Object.keys(environments).forEach((envname) => {
    const files = environments[envname].files.fail;
    Object.keys(files).forEach((filename, index) => {
      const testLength = files[index].tests.length;
      count += testLength;
    });
  });
  return count;
};
