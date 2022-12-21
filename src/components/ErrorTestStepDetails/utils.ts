export const getFileNameFromFilePath = (filePath: string): string => {
  const filePathAfterSplit = filePath.split('/');
  const fileName = filePathAfterSplit[filePathAfterSplit.length - 1];

  return fileName;
};
