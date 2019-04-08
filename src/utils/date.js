export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getDateSuffix = day => {};

export const getMonthName = date => MONTHS[date.getMonth()];

export const getDayWithSuffix = date => `${date.getDate()}${getDateSuffix(date.getDate())}`;
