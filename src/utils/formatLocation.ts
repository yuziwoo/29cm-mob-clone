export const formatLocation = (location: string): string => {
  return location.split('/')[1] ? location.split('/')[1] : '';
};
