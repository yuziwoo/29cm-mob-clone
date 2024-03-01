import { ComponentStyle as S } from './ProductFooterModal.styled';
import SelectInput from '../../../SelectInput/SelectInput';
import { useSelectProductOptions } from '../../../../../hooks/product/useSelectProductOptions';
import ProductFooterSelectedOption from '../ProductFooterSelectedOption/ProductFooterSelectedOption';
import { theme } from '../../../../../styles/theme';
import { useCallback } from 'react';
import CommonButton from '../../../motion/CommonButton/CommonButton';
import useCart from '../../../../../hooks/cart/useCart';

interface ProductFooterModalProps {
  productId: string;
  onRequestClose: () => void;
}

const ProductFooterModal = ({ productId, onRequestClose }: ProductFooterModalProps) => {
  /**
   * Prodcut Detail 페이지에서 Footer의 구매하기 버튼을 클릭하면 열리는 모달입니다.
   */

  const {
    selectableOptions,
    product,
    currentOption,
    selectedOptions,
    handleSelectOption,
    removeSelectedOption,
    updateSelectedOptionCount,
    originalPrice,
    brandDiscountPrice,
    finalPrice,
  } = useSelectProductOptions({ productId });

  const { addItem, addSeveralOptionsItem } = useCart();

  const addSingleOption = useCallback(async () => {
    await addItem.mutate({
      productId,
      selectOption: selectedOptions[0].option,
      count: selectedOptions[0].count,
    });
  }, [addItem, productId, selectedOptions]);

  const handleClickAddCart = useCallback(async () => {
    if (selectedOptions.length === 0) {
      window.alert('상품 옵션을 선택해주세요.');
      return;
    }

    if (selectedOptions.length === 1) {
      addSingleOption();
      onRequestClose();
      return;
    }

    addSeveralOptionsItem.mutate({ productId, selectOptions: selectedOptions });
    onRequestClose();
  }, [selectedOptions, addSingleOption, addSeveralOptionsItem, productId, onRequestClose]);

  const handleClickBuy = useCallback(() => {
    window.alert('구매하기 기능은 곧 구현 예정입니다. 🚀');
    onRequestClose();
  }, []);

  if (product === null) return <></>;
  return (
    <S.Component>
      <S.Title>구매 안내</S.Title>
      <S.Text>실제로 판매하는 상품은 아닙니다.</S.Text>

      {/* 선택 옵션 */}
      {Object.keys(selectableOptions).map((key, index) => (
        <S.SelectWrap key={index}>
          <SelectInput
            title={key}
            values={Object.values(selectableOptions)[index]}
            onChange={(value: string) => {
              handleSelectOption(key, value);
            }}
          />
        </S.SelectWrap>
      ))}

      {/* 선택 중인 상품 */}
      {Object.keys(currentOption).length > 0 && (
        <S.CurrentOptions>
          {Object.keys(currentOption).map((key, index) => (
            <S.CurrentOption>
              {key} {currentOption[key]}
            </S.CurrentOption>
          ))}
        </S.CurrentOptions>
      )}

      {/* 선택 완료한 상품 */}
      <S.SelectedOption>
        {selectedOptions.map(({ count, option }, index) => (
          <ProductFooterSelectedOption
            key={index}
            name={Object.values(option).join(' ')}
            count={count}
            onChangeInput={(count: number) => {
              updateSelectedOptionCount(count, index);
            }}
            onRemoveOption={() => {
              removeSelectedOption(index);
            }}
          />
        ))}
      </S.SelectedOption>

      {/* 가격 정보 */}
      {selectedOptions.length > 0 && (
        <S.Price>
          <S.OriginalPrice>
            <S.SmallPriceText>총 상품 금액</S.SmallPriceText>
            <S.SmallPriceText>{originalPrice.toLocaleString()}원</S.SmallPriceText>
          </S.OriginalPrice>

          <S.DiscountPrice>
            <S.FlexWrap>
              <S.SmallPriceText>쿠폰 할인</S.SmallPriceText>
              <S.CouponInfoBlock>
                <p>브랜드 할인 적용</p>
              </S.CouponInfoBlock>
            </S.FlexWrap>
            <S.SmallPriceText $color={theme.color.SIGNATURE}>
              -{brandDiscountPrice.toLocaleString()}원
            </S.SmallPriceText>
          </S.DiscountPrice>

          <S.FinalPrice>
            <S.BigPriceText>구매 가능 금액</S.BigPriceText>
            <S.BigPriceText $color={theme.color.SIGNATURE}>
              {finalPrice.toLocaleString()}원
            </S.BigPriceText>
          </S.FinalPrice>
        </S.Price>
      )}

      {/* 장바구니 | 구매하기 버튼 */}
      <S.Buttons>
        <CommonButton>
          <S.CartButton onClick={handleClickAddCart}>
            <p>장바구니 담기</p>
          </S.CartButton>
        </CommonButton>
        <CommonButton>
          <S.BuyButton onClick={handleClickBuy}>
            <p>바로 구매하기</p>
          </S.BuyButton>
        </CommonButton>
      </S.Buttons>
    </S.Component>
  );
};

export default ProductFooterModal;
