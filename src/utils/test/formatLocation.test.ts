import { formatLocation } from '../formatLocation';

describe('formatLocation', () => {
  // given
  const cases = [
    { input: '/', expected: '' },
    { input: '/search', expected: 'search' },
    { input: '/search/keyword', expected: 'search' },
  ];

  it.each(cases)(
    '/path/query 형식의 Location에서 첫번째 path를 반환한다.',
    ({ input, expected }) => {
      const result = formatLocation(input);

      expect(result).toBe(expected);
    }
  );
});
