import { useCallback, useEffect, useState } from 'react';
import { useProduct } from './useProduct';
import { ProductOptionProps, ProductProps, SelectedOption } from '../../types/product';
import { isEqualObject } from '../../utils/isEqualObject';

export const useSelectProductOptions = ({ productId }: { productId: string }) => {
  /**
   * 상품 상세페이지에서 상품의 옵션을 선택할 때 사용합니다.
   */

  const { getProduct } = useProduct();

  // 선택 가능한 옵션
  const INITIAL_OPTION = {
    선택: ['기본'],
  };
  const [selectableOptions, setSelectableOptions] = useState<ProductOptionProps>(INITIAL_OPTION);

  // 옵션이 없는 상품인가?
  const [isOptionsEmpty, setIsOptionsEmpty] = useState(true);

  // 상품의 정보
  const [product, setProduct] = useState<ProductProps | null>(null);

  // 상품의 정보를 가져오면 정보를 할당한다.
  useEffect(() => {
    if (getProduct(productId)) {
      setProduct(getProduct(productId));
    }
  }, [getProduct, productId]);

  // 상품의 정보가 변경되면 옵션을 변경한다.
  useEffect(() => {
    if (product && Object.keys(product.option).length > 0) {
      setSelectableOptions(product.option);
      setIsOptionsEmpty(false);
    }
  }, [product]);

  // 현재 선택중인 옵션: { key1: value1, key2: value2 }
  const [currentOption, setCurrentOption] = useState<Record<string, string>>({});

  // 선택 완료한 옵션: [{ count: 1, option: { key1: value1, key2: value2 }}]
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);

  // 현재 선택중인 옵션을 업데이트한다.
  const updateCurrentOption = useCallback(
    (optionKey: string, optionValue: string) => {
      const newOption = { ...currentOption, [optionKey]: optionValue };
      setCurrentOption(newOption);

      return newOption;
    },
    [currentOption]
  );

  // 필요한 모든 옵션을 선택했는지 검증한다.
  const isAllOptionsSelected = useCallback(
    (newOption: Record<string, string>) => {
      return Object.keys(newOption).length === Object.keys(selectableOptions).length;
    },
    [selectableOptions]
  );

  // 이미 선택한 옵션과 중복되는지 검증한다.
  const isOptionRepeated = useCallback(
    (newOption: Record<string, string>) => {
      const selectedOptionsArray = selectedOptions.map((countAndOption) => countAndOption.option);
      const sameOption = selectedOptionsArray.filter((option) => isEqualObject(option, newOption));

      return sameOption.length > 0;
    },
    [selectedOptions]
  );

  // 선택 완료한 옵션에 새로운 옵션을 추가한다.
  const addSelectedOptions = useCallback((newOption: Record<string, string>) => {
    setSelectedOptions((prevOption) => [...prevOption, { count: 1, option: newOption }]);
  }, []);

  // 옵션을 선택했을때 실행시킬 함수
  const handleSelectOption = useCallback(
    (optionKey: string, optionValue: string) => {
      const newOption = updateCurrentOption(optionKey, optionValue);

      if (!isAllOptionsSelected(newOption)) return;
      if (isOptionRepeated(newOption)) {
        window.alert('이미 선택한 옵션입니다.');
        setCurrentOption({});
        return;
      }

      setCurrentOption({});
      addSelectedOptions(newOption);
    },
    [updateCurrentOption, isAllOptionsSelected, isOptionRepeated, addSelectedOptions]
  );

  // 옵션 제거
  const removeSelectedOption = useCallback(
    (index: number) => {
      const newOptions = [...selectedOptions];
      newOptions.splice(index, 1);
      setSelectedOptions(newOptions);
    },
    [selectedOptions]
  );

  // 옵션 숫자 변경
  const updateSelectedOptionCount = useCallback(
    (count: number, index: number) => {
      const newOptions = [...selectedOptions];
      newOptions[index].count = count;
      setSelectedOptions(newOptions);
    },
    [selectedOptions]
  );

  const [originalPrice, setOriginalPrice] = useState(0);
  const [brandDiscountPrice, setBrandDiscountPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    if (product !== null) {
      const totalCount = selectedOptions.reduce((a, b) => a + b.count, 0);
      setOriginalPrice(totalCount * product.price);
      setBrandDiscountPrice(totalCount * (product.price - product.discount));
      setFinalPrice(totalCount * product.discount);
    }
  }, [selectedOptions, product]);

  return {
    selectableOptions,
    isOptionsEmpty,
    product,
    currentOption,
    selectedOptions,
    handleSelectOption,
    removeSelectedOption,
    updateSelectedOptionCount,
    originalPrice,
    brandDiscountPrice,
    finalPrice,
  };
};
