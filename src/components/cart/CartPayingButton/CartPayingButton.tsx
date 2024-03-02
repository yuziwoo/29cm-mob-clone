import { ComponentStyle as S } from './CartPayingButton.styled';
import CommonButton from '../../common/motion/CommonButton/CommonButton';
import { CartItemProps } from '../../../types/cart';
import { useCallback, useEffect, useState } from 'react';
import { useProduct } from '../../../hooks/product/useProduct';

interface CartPayingButtonProps {
  cartData: CartItemProps[];
}

const CartPayingButton = ({ cartData }: CartPayingButtonProps) => {
  /**
   * 장바구니 페이지 하단에 fixed하게 배치된 결제하기 버튼입니다. 총 결제 금액을 표시합니다.
   * @params
   * cartData: 결제하기위해 선택된 아이템의 개수와 productId를 필요로합니다.
   */

  const [finalPrice, setFinalPrice] = useState(0);
  const { productQuery, getProduct } = useProduct();

  useEffect(() => {
    if (!productQuery.isSuccess) return;

    let newFinalPrice = 0;
    cartData.forEach(({ productId, count }) => {
      const price = getProduct(productId)?.discount || 0;
      newFinalPrice += price * count;
    });

    setFinalPrice(newFinalPrice);
  }, [cartData, getProduct, productQuery]);

  const handleClickButton = useCallback(() => {
    window.alert('구매하기 기능은 곧 구현 예정입니다. 🚀');
  }, []);

  if (!productQuery.isSuccess) return <></>;
  return (
    <S.Component>
      <S.Button onClick={handleClickButton}>
        <CommonButton>
          <S.FinalPrice>총 {finalPrice.toLocaleString()}원 결제하기</S.FinalPrice>
        </CommonButton>
      </S.Button>
    </S.Component>
  );
};

export default CartPayingButton;
