export const getTwoDigitString = (number: number) => {
  if (number >= 10 || number < 0) return number.toString();

  return `0${Math.round(number)}`;
};
