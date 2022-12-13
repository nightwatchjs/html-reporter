import { IEnvironmentData, Status } from '../../transform';
import { IVrtData } from '../../transform';

export const getVrtData = (data: IEnvironmentData, fileID: string, testID: string) => {
  const [fileType, fileLocation] = fileID.split('-') as [fileType: Status, fileLocation: number];

  const testObj = data.files[fileType][fileLocation].tests.find((test) => test.key === testID);

  return testObj ? testObj.vrt : {} as IVrtData;
};
