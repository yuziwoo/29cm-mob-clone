type IsEqualObjectParams = Record<string, string | undefined | null | number | boolean>;

export const isEqualObject = (obj1: IsEqualObjectParams, obj2: IsEqualObjectParams) => {
  /**
   * 두 개의 객체가 키 순서를 무시하고, 서로 같은 키와 값을 가지고 있는지 확인합니다.ㄴ
   */

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};
