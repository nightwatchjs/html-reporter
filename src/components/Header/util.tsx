export const getDateFromMillisecond = (date: Date) => {

  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(date);
};
