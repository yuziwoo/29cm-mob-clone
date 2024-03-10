import { validatePassword } from '../validatePassword';

describe('validatePassword', () => {
  // given
  const cases = [
    { input: 'with space', expected: false },
    { input: 'short', expected: false },
    { input: '©', expected: false },
    { input: 'rightPW1234@!', expected: true },
  ];

  it.each(cases)(
    'validatePassword 함수가 올바른 비밀번호 형식을 체크한다.',
    ({ input, expected }) => {
      const result = validatePassword(input);

      expect(result).toBe(expected);
    }
  );
});
