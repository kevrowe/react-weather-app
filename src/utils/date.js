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

export const getDateSuffix = day => {
  if (day > 10 && day < 20) {
    return 'th';
  }

  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

export const getMonthName = date => MONTHS[date.getMonth()];

export const getDayWithSuffix = date => `${date.getDate()}${getDateSuffix(date.getDate())}`;
