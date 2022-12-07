export const getDateFromMillisecond = (milliseconds: number) => {
  const date = new Date(milliseconds);

  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date);
};
