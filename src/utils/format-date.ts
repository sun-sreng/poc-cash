import { differenceInDays } from 'date-fns';

export const formatDateDuration = (startDate: Date, endDate: Date): string => {
  const daysDifference = differenceInDays(endDate, startDate);

  if (daysDifference < 7) {
    return `${daysDifference} day${daysDifference === 1 ? '' : 's'}`;
  } else if (daysDifference < 30) {
    const weeks = Math.floor(daysDifference / 7);
    return `${weeks} week${weeks === 1 ? '' : 's'}`;
  } else if (daysDifference < 365) {
    const months = Math.floor(daysDifference / 30);
    return `${months} month${months === 1 ? '' : 's'}`;
  } else {
    const years = Math.floor(daysDifference / 365);
    return `${years} year${years === 1 ? '' : 's'}`;
  }
};
