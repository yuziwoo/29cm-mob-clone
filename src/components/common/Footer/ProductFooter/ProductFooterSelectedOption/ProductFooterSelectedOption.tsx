import { useCallback } from 'react';
import { ComponentStyle as S } from './ProductFooterSelectedOption.styled';
import CommonButton from '../../../motion/CommonButton/CommonButton';

interface ProductFooterSelectedOptionProps {
  name: string;
  count: number;
  onChangeInput: (count: number) => void;
  onRemoveOption: () => void;
}

const ProductFooterSelectedOption = ({
  name,
  onChangeInput,
  onRemoveOption,
  count,
}: ProductFooterSelectedOptionProps) => {
  /**
   * 옵션의 숫자를 추가/감소, 옵션을 제거할 수 있는 컴포넌트입니다.
   * 상품 상세페이지의 구매하기 모달에서 사용됩니다.
   */

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isNaN(+e.target.value)) return;
      onChangeInput(+e.target.value);
    },
    [onChangeInput]
  );

  const handleIncrease = useCallback(() => {
    if (count < 999) {
      onChangeInput(++count);
      return;
    }
  }, [onChangeInput, count]);

  const handledecrease = useCallback(() => {
    if (count > 1) {
      onChangeInput(--count);
      return;
    }
  }, [onChangeInput, count]);

  const handleRemoveOption = useCallback(() => {
    onRemoveOption();
  }, [onRemoveOption]);

  return (
    <S.Component>
      <S.Title>{name}</S.Title>

      <S.ButtonWrap>
        <S.InputWrap>
          <CommonButton>
            <S.DecreaseButton onClick={handledecrease}></S.DecreaseButton>
          </CommonButton>
          <S.Input type="text" value={count} maxLength={3} onChange={handleInputChange}></S.Input>
          <CommonButton>
            <S.IncreaseButton onClick={handleIncrease}></S.IncreaseButton>
          </CommonButton>
        </S.InputWrap>
        <CommonButton style={{ marginLeft: '2rem' }}>
          <S.RemoveButton onClick={handleRemoveOption}></S.RemoveButton>
        </CommonButton>
      </S.ButtonWrap>
    </S.Component>
  );
};

export default ProductFooterSelectedOption;
