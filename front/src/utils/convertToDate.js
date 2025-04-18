/**
 * Adds given number with today date.
 * @param {Date} dateToConvert
 * For negative numbers, it returns a date before today.
 * @returns {string} - solar date in string format.
 */
export default function getPersianDateOf(dateToConvert) {
  dateToConvert = new Date(dateToConvert);
  let result = dateToConvert.setDate(dateToConvert.getDate());
  result = new Date(result).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    formatMatcher: "basic",
  });
  return result;
}

export function getGaregorianDateOf(dateToConvert) {
  return new Date(dateToConvert).toISOString().substring(0, 10);
}
