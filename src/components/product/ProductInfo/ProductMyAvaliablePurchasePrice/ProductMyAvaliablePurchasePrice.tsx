import { DiscountDetail } from '../../../../types/product';
import * as S from './ProductMyAvaliablePurchasePrice.styled';
import IconQuestion from '../../../icons/IconQuestion';
import { theme } from '../../../../styles/theme';
import { useCallback, useEffect, useState } from 'react';
import DescriptionBoard from '../../../common/DescriptionBoard/DescriptionBoard';
import IconDownArrow2 from '../../../icons/IconDownArrow2';
import ProductDiscountList from '../ProductDiscountList/ProductDiscountList';
import { getDiscount } from '../../../../utils/getDiscount';
import SkeletonText from '../../../skeleton/common/SkeletonText';

interface ProductMyAvaliablePurchasePriceProps {
  counponDiscounts: DiscountDetail[] | undefined;
  paymentDiscounts: DiscountDetail[] | undefined;
  originalPrice: number | undefined;
  brandDiscount: number | undefined;
  priceAfterBrandDiscount: number | undefined;
}

const ProductMyAvaliablePurchasePrice = ({
  counponDiscounts,
  paymentDiscounts,
  originalPrice,
  brandDiscount,
  priceAfterBrandDiscount,
}: ProductMyAvaliablePurchasePriceProps) => {
  /**
   * 상품 상세페이지의 나의 구매 가능 가격 컴포넌트입니다.
   *
   * 할인 규칙
   * - 브랜드 할인은 상품 원래 가격에서 할인됩니다.
   * - 쿠폰 할인과 결제수단 할인은 브랜드 할인 후 가격에서 할인되며, 한가지 쿠폰만 사용 가능합니다.
   * - 가장 큰 할인율의 쿠폰 할인은 기본 적용되어 나타납니다.
   *
   * 정렬
   * - 할인율이 높은 순으로 정렬되어 나타납니다.
   */

  const [showDescription, setShowDescripion] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const handleToggleDescription = useCallback(() => {
    setShowDescripion((prevState) => !prevState);
  }, [setShowDescripion]);

  const handleToggleDetail = useCallback(() => {
    setShowDetail((prevState) => !prevState);
  }, [setShowDetail]);

  const [finalAmount, setFinalAmount] = useState({
    price: 0,
    discount: 0,
  });

  const [selectedDiscounts, setSelectedDiscounts] = useState<{
    coupon: number | null;
    payment: number | null;
  }>({
    coupon: 0,
    payment: null,
  });

  const handleClickDiscount = (index: number, kind: 'coupon' | 'payment') => {
    if (kind === 'coupon') {
      setSelectedDiscounts((prevSelectedDiscounts) => ({
        ...prevSelectedDiscounts,
        coupon: prevSelectedDiscounts.coupon === index ? null : index,
      }));
      return;
    }
    setSelectedDiscounts((prevSelectedDiscounts) => ({
      ...prevSelectedDiscounts,
      payment: prevSelectedDiscounts.payment === index ? null : index,
    }));
  };

  useEffect(() => {
    if (
      paymentDiscounts === undefined ||
      counponDiscounts === undefined ||
      priceAfterBrandDiscount === undefined ||
      originalPrice === undefined
    ) {
      return;
    }

    const couponDiscount =
      selectedDiscounts.coupon === null ? 0 : counponDiscounts[selectedDiscounts.coupon].discount;
    const paymentDiscount =
      selectedDiscounts.payment === null ? 0 : paymentDiscounts[selectedDiscounts.payment].discount;
    const totalDiscount = Math.floor(
      (priceAfterBrandDiscount / 100) * (couponDiscount + paymentDiscount)
    );
    const finalPrice = priceAfterBrandDiscount - totalDiscount;
    const finalDiscount = getDiscount(originalPrice, finalPrice);

    setFinalAmount({
      price: finalPrice,
      discount: finalDiscount,
    });
  }, [
    selectedDiscounts,
    counponDiscounts,
    paymentDiscounts,
    priceAfterBrandDiscount,
    originalPrice,
  ]);

  if (
    counponDiscounts === undefined ||
    paymentDiscounts === undefined ||
    originalPrice === undefined ||
    brandDiscount === undefined ||
    priceAfterBrandDiscount === undefined
  )
    return (
      <S.SectionMyAvaliablePurchasePrice>
        <SkeletonText height="18px" />
      </S.SectionMyAvaliablePurchasePrice>
    );

  return (
    <S.SectionMyAvaliablePurchasePrice>
      <S.MainBlock>
        <S.Title>
          <S.FlexWrap>
            <S.TitleHeading>나의 구매 가능 가격</S.TitleHeading>
            <S.QuestionButton onClick={handleToggleDescription}>
              <IconQuestion color={theme.color.GRAY5} />
            </S.QuestionButton>
          </S.FlexWrap>
          <S.FlexWrap onClick={handleToggleDetail}>
            <S.Discount>{finalAmount.discount}%</S.Discount>
            <S.FinalPrice>{finalAmount.price.toLocaleString()} 원</S.FinalPrice>
            <S.DetailArrow $isVisible={showDetail}>
              <IconDownArrow2 />
            </S.DetailArrow>
          </S.FlexWrap>

          <DescriptionBoard
            showDescription={showDescription}
            onClickDescription={handleToggleDescription}
          >
            <S.Description>
              <li>
                <p>구매 가능 가격은 옵션 한 개의 금액으로 계산됩니다.</p>
              </li>
              <li>
                <p>구매 가능 가격은 확인 용도로만 사용할 수 있습니다.</p>
              </li>
              <li>
                <p>
                  본 홈페이지는 실제로{' '}
                  <span style={{ fontWeight: '700' }}>제품을 구매, 판매하지 않습니다.</span>
                </p>
              </li>
            </S.Description>
          </DescriptionBoard>
        </S.Title>
      </S.MainBlock>

      <S.DetailBlock $isVisible={showDetail}>
        <S.DetailHeading>브랜드 할인</S.DetailHeading>
        <S.BrandDiscount>
          <h5>브랜드 할인 {brandDiscount}%</h5>
          <p>{(priceAfterBrandDiscount - originalPrice).toLocaleString()}원</p>
        </S.BrandDiscount>

        <S.DetailHeading>쿠폰 할인</S.DetailHeading>
        {counponDiscounts.length > 0 &&
          counponDiscounts.map((info, idx) => (
            <ProductDiscountList
              price={priceAfterBrandDiscount}
              info={info}
              checked={idx === selectedDiscounts.coupon}
              onClick={() => {
                handleClickDiscount(idx, 'coupon');
              }}
              key={idx}
            />
          ))}

        <S.DetailHeading>결제수단 할인</S.DetailHeading>
        {paymentDiscounts.length > 0 &&
          paymentDiscounts.map((info, idx) => (
            <ProductDiscountList
              price={priceAfterBrandDiscount}
              info={info}
              checked={idx === selectedDiscounts.payment}
              onClick={() => {
                handleClickDiscount(idx, 'payment');
              }}
              key={idx}
            />
          ))}
      </S.DetailBlock>
    </S.SectionMyAvaliablePurchasePrice>
  );
};

export default ProductMyAvaliablePurchasePrice;
