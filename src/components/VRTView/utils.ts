import { IEnvironmentData, Status } from '../../transform';
import { IVrtData } from '../../transform';

export const getVrtData = (data: IEnvironmentData, fileID: string, testID: string) => {
  const [fileType, fileLocation] = fileID.split('-') as [fileType: Status, fileLocation: number];
  const [, , , index] = testID.split('-');
  const testObj = data.files[fileType][fileLocation].tests[Number(index)];

  return testObj ? testObj.vrt : ({} as IVrtData);
};
