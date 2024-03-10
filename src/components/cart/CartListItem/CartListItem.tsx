import { useCallback, useEffect, useState } from 'react';
import { useProduct } from '../../../hooks/product/useProduct';
import { ComponentStyle as S } from './CartListItem.styled';
import { ProductProps } from '../../../types/product';
import { theme } from '../../../styles/theme';
import CommonButton from '../../common/motion/CommonButton/CommonButton';
import { useRouter } from '../../../hooks/useRouter';
import { ROUTE_PATH } from '../../../constants/path';
import { getDiscount } from '../../../utils/getDiscount';
import IconCheckbox2 from '../../icons/IconCheckbox2';

interface CartListItemProps {
  productId: string;
  isChecked: boolean;
  onToggleCheck: () => void;
  onCountChange: (count: number) => void;
  count: number;
  options: Record<string, string>;
  onRemoveItem: () => void;
}

const CartListItem = ({
  productId,
  options,
  onRemoveItem,
  count,
  onCountChange,
  isChecked,
  onToggleCheck,
}: CartListItemProps) => {
  /**
   * 장바구니 페이지에서 나열되는 상품 하나를 담당합니다.
   * 상품의 브랜드, 이름, 썸네일, 선택된 옵션을 보여주고,
   * 상품을 선택/취소, 삭제, 개수변경의 기능을 가지고 있습니다.
   */

  const [product, setProduct] = useState<ProductProps | null>(null);
  const { productQuery, getProduct } = useProduct();

  const { navigate } = useRouter();

  useEffect(() => {
    setProduct(getProduct(productId));
  }, [getProduct, productId]);

  const handleClickRemove = useCallback(() => {
    onRemoveItem();
  }, [onRemoveItem]);

  const handleNavigateProductPage = useCallback(() => {
    navigate(ROUTE_PATH.productDetail.replace(':id', productId));
  }, [navigate, productId]);

  const handleClickBrand = useCallback(() => {
    const brandId = product?.brandId ? product?.brandId : '';
    navigate(ROUTE_PATH.brandDetail.replace(':id', `${brandId}`));
  }, [navigate, product]);

  const handleIncreaseCount = useCallback(() => {
    if (count < 999) {
      onCountChange(++count);
    }
  }, [count, onCountChange]);

  const handleDecreaseCount = useCallback(() => {
    if (count > 1) {
      onCountChange(--count);
    }
  }, [count, onCountChange]);

  if (!productQuery.isSuccess) return <></>;
  return (
    <S.Component>
      {/* 헤더: 상품 체크박스와 삭제 버튼 */}
      <S.Header>
        <S.Checkbox onClick={onToggleCheck}>
          <IconCheckbox2 checkedColor={theme.color.SIGNATURE} isChecked={isChecked} />
        </S.Checkbox>
        <CommonButton>
          <S.DeleteButton onClick={handleClickRemove}>
            <p>삭제</p>
          </S.DeleteButton>
        </CommonButton>
      </S.Header>

      {/* 바디: 썸네일 이미지와 브랜드, 상품 이름, 선택한 옵션, 상품 가격과 할인 정보 */}
      <S.Body>
        <CommonButton>
          <S.Thumb
            onClick={handleNavigateProductPage}
            style={{ backgroundImage: `url('${product?.thumb[0]}')` }}
          ></S.Thumb>
        </CommonButton>

        <S.Info>
          <CommonButton>
            <S.Brand onClick={handleClickBrand}>{product?.brandName}</S.Brand>
          </CommonButton>
          <CommonButton>
            <S.Name onClick={handleNavigateProductPage}>{product?.name}</S.Name>
          </CommonButton>
          <S.Options>
            {Object.keys(options).map((key) => (
              <span key={key}>
                {key} {options[key]}
              </span>
            ))}
          </S.Options>
          <S.SinglePrice>
            <S.OriginalSinglePrice>{product?.price.toLocaleString()}원</S.OriginalSinglePrice>
            <S.SinglePriceDiscount>
              [{getDiscount(product?.price, product?.discount)}%] {product?.discount}원
            </S.SinglePriceDiscount>
          </S.SinglePrice>
        </S.Info>
      </S.Body>

      {/* 푸터: 최종 가격과 수량 옵션 */}
      <S.Footer>
        <S.Count>
          <CommonButton>
            <S.DecreaseButton onClick={handleDecreaseCount} />
          </CommonButton>
          <S.CountValue>
            <p>{count}</p>
          </S.CountValue>
          <CommonButton>
            <S.IncreaseButton onClick={handleIncreaseCount} />
          </CommonButton>
        </S.Count>

        <S.FinalPriceWrap>
          <S.FinalPrice>
            총 {product?.discount !== undefined ? (product?.discount * count).toLocaleString() : ''}
          </S.FinalPrice>
          <S.PriceUnit>원</S.PriceUnit>
        </S.FinalPriceWrap>
      </S.Footer>
    </S.Component>
  );
};

export default CartListItem;
