export const getAccrualPoints = (finalPrice: number) => {
  return Math.floor(finalPrice / 100).toLocaleString();
};
