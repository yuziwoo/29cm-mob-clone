import { isEqualObject } from '../isEqualObject';

describe('isEqualObject', () => {
  it('두 객체가 같은 키와 값을 가지고 있는지 확인합니다.', () => {
    // given
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    const expectedPoints = true;
    const actualPoints = isEqualObject(obj1, obj2);

    // then
    expect(actualPoints).toBe(expectedPoints);
  });

  it('객체 키의 순서가 바뀌어도 같다고 인지합니다.', () => {
    // given
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 2, a: 1 };
    const expectedPoints = true;
    const actualPoints = isEqualObject(obj1, obj2);

    // then
    expect(actualPoints).toBe(expectedPoints);
  });
});
