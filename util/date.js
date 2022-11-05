export function getFormattedDate(date) {
  const d = new Date(date);
  return d.toISOString().slice(0, 10);
}

export function getDateMinusDates(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
