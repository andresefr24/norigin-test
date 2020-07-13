import { differenceInMinutes, isWithinInterval, format } from "date-fns";

export const minutesDiffFromDayStart = (start, end) => {
  const initDate = new Date();
  initDate.setHours(0, 0, 0, 0);
  const startDate = new Date(start);
  const endDate = new Date(end);

  return {
    start: differenceInMinutes(startDate, initDate) / 10,
    end: differenceInMinutes(endDate, initDate) / 10,
    isAiring: isWithinInterval(new Date(), { start: startDate, end: endDate }),
    startFormatted: format(startDate, "hh:mm"),
    endFormatted: format(endDate, "hh:mm"),
  };
};

export const currentHourPosition = (measure) => {
  const initDate = new Date();
  initDate.setHours(0, 0, 0, 0);
  return Math.floor(differenceInMinutes(new Date(), initDate) / 10) * measure;
};
