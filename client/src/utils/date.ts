// Define here to avoid recreating the object on each method call
const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
};

/**
 * Takes a UTC timestamp and returns a formatted date string.
 *
 * @example formatUtcDate('2024-08-27T23:16:10.554Z') => 'Aug 27, 2024'
 */
export const formatUtcDate = (utcDate: string) => {
  const date = new Date(utcDate);
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
