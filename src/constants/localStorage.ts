const recentSearch = {
  name: 'recent_search',
  separateSymbol: ',',
  maxLength: 10,
} as const;

export const localStorageAPI = {
  recentSearch,
} as const;
