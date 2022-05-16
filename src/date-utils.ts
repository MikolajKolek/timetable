export function mondayOf(date: Date) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() - ((date.getDay() - 1 + 7) % 7));
  newDate.setHours(0, 0, 0, 0);
  return newDate;
}
