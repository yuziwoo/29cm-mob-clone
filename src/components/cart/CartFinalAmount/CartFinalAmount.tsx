import { ComponentStyle as S } from './CartFinalAmount.styled';
import { CartItemProps } from '../../../types/cart';
import { useEffect, useState } from 'react';
import { useProduct } from '../../../hooks/product/useProduct';
import { theme } from '../../../styles/theme';

interface CartFinalAmountProps {
  cartData: CartItemProps[];
}

const CartFinalAmount = ({ cartData }: CartFinalAmountProps) => {
  /**
   * 장바구니 페이지에서 선택된 아이템의 총 결제 금액을 보여주는 컴포넌트입니다.
   * @params
   * cartData: 결제하기위해 선택된 아이템의 개수와 productId를 필요로합니다.
   */

  const [finalPrice, setFinalPrice] = useState(0);
  const [originalPrice, setOriginalPrice] = useState(0);
  const { productQuery, getProduct } = useProduct();

  useEffect(() => {
    if (!productQuery.isSuccess) return;

    let newFinalPrice = 0;
    let newOriginalPrice = 0;

    cartData.forEach(({ productId, count }) => {
      const singleFinalPrice = getProduct(productId)?.discount || 0;
      newFinalPrice += singleFinalPrice * count;

      const singleOriginalPrice = getProduct(productId)?.price || 0;
      newOriginalPrice += singleOriginalPrice * count;
    });

    setFinalPrice(newFinalPrice);
    setOriginalPrice(newOriginalPrice);
  }, [cartData, getProduct, productQuery]);

  if (!productQuery.isSuccess) return <></>;
  return (
    <S.Component>
      <S.Ul>
        <S.List>
          <S.Title>주문 상품 수</S.Title>
          <S.AmountWrap>
            <S.Amount>총 {cartData.length.toLocaleString()}</S.Amount>
            <S.Unit>가지</S.Unit>
          </S.AmountWrap>
        </S.List>

        <S.List>
          <S.Title>할인 전 금액</S.Title>
          <S.AmountWrap>
            <S.Amount>{originalPrice.toLocaleString()}</S.Amount>
            <S.Unit>원</S.Unit>
          </S.AmountWrap>
        </S.List>

        <S.List>
          <S.Title>총 배송비</S.Title>
          <S.AmountWrap>
            <S.Amount>0</S.Amount>
            <S.Unit>원</S.Unit>
          </S.AmountWrap>
        </S.List>

        <S.List>
          <S.Title>총 결제 금액</S.Title>
          <S.AmountWrap>
            <S.Amount $color={theme.color.SIGNATURE}>{finalPrice.toLocaleString()}</S.Amount>
            <S.Unit $color={theme.color.SIGNATURE}>원</S.Unit>
          </S.AmountWrap>
        </S.List>
      </S.Ul>
    </S.Component>
  );
};

export default CartFinalAmount;
