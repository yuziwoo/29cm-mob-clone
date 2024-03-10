import { validateEmail } from '../validateEmail';

describe('validateEmail', () => {
  // given
  const cases = [
    { input: 'not Email', expected: false },
    { input: 'shortEmail@gmail', expected: false },
    { input: 'shortEmail2@gmail.c', expected: false },
    { input: 'wrongEmail.com', expected: false },
    { input: 'rightEmail@gmail.com', expected: true },
  ];

  it.each(cases)(
    'validateEmail 함수가 올바른 이메일 형식을 체크한다.',
    ({ input, expected }) => {
      const result = validateEmail(input);

      expect(result).toBe(expected);
    }
  );
});
