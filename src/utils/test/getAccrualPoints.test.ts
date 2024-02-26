import { getAccrualPoints } from '../getAccrualPoints';

describe('getAccrualPoints', () => {
  it('최종 가격에 대한 적립 포인트를 정확하게 반환해야 합니다', () => {
    // given
    const finalPrice = 1000;
    const expectedPoints = '10';
    const actualPoints = getAccrualPoints(finalPrice);

    // then
    expect(actualPoints).toBe(expectedPoints); // 실제 포인트가 예상 포인트와 일치하는지 확인
  });

  it('100원 미만의 최종 가격에는 적립 포인트가 없어야 합니다', () => {
    // given
    const finalPrice = 50;
    const expectedPoints = '0';
    const actualPoints = getAccrualPoints(finalPrice);

    // then
    expect(actualPoints).toBe(expectedPoints); // 실제 포인트가 예상 포인트와 일치하는지 확인
  });

  it('소수점 포함 최종 가격에 대한 적립 포인트를 정확하게 반환해야 합니다', () => {
    // given
    const finalPrice = 123.45;
    const expectedPoints = '1';
    const actualPoints = getAccrualPoints(finalPrice);

    // then
    expect(actualPoints).toBe(expectedPoints); // 실제 포인트가 예상 포인트와 일치하는지 확인
  });

  it('4자리 이상의 포인트는 쉼표(,)로 자리를 나누어 반환합니다.', () => {
    // given
    const finalPrice = 123400;
    const expectedPoints = '1,234';
    const actualPoints = getAccrualPoints(finalPrice);

    // then
    expect(actualPoints).toBe(expectedPoints); // 실제 포인트가 예상 포인트와 일치하는지 확인
  });
});
