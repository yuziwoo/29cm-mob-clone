import { getTwoDigitString } from '../getTwoDigitString';

describe('getTwoDigitString', () => {
  it('0~9 사이의 수를 문자열로 바꾼 두자리 수로 반환합니다.', () => {
    // given
    const INPUT = 1;
    const expectResult = '01';

    // then
    expect(getTwoDigitString(INPUT)).toBe(expectResult);
  });

  it('10 이상의 수는 문자열로 바뀐 그대로의 수를 반환합니다.', () => {
    // given
    const INPUT = 10;
    const expectResult = '10';

    // then
    expect(getTwoDigitString(INPUT)).toBe(expectResult);
  });

  it('0 미만의 수는 문자열로 바뀐 그대로의 수를 반환합니다.', () => {
    // given
    const INPUT = -1;
    const expectResult = '-1';

    // then
    expect(getTwoDigitString(INPUT)).toBe(expectResult);
  });

  it('0~9 자리의 수가 정수가 아닌 경우 정수로 변경한 후 문자열로 바꾼 두자리 수를 반환합니다.', () => {
    // given
    const INPUT = 1.2;
    const expectResult = '01';

    // then
    expect(getTwoDigitString(INPUT)).toBe(expectResult);
  });
});
