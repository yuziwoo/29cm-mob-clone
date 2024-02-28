import { useId } from 'react';
import * as S from './ProductDiscountList.style';
import { DiscountDetail } from '../../../../types/product';
import IconCheckbox from '../../../icons/IconCheckbox';
import SkeletonText from '../../../skeleton/common/SkeletonText';

interface ProductDiscountListProps {
  price: number | undefined;
  info: DiscountDetail | undefined;
  checked: boolean | undefined;
  onClick: () => void;
}

const ProductDiscountList = ({ price, info, checked, onClick }: ProductDiscountListProps) => {
  /**
   * 상품 상세페이지의 나의 구매 가능 가격 탭에서 사용되는 할인 정보 리스트 컴포넌트입니다.
   * 체크박스를 클릭할
   */
  const id = useId();

  if (price === undefined || info === undefined || checked === undefined)
    return (
      <div style={{ padding: '6px 0' }}>
        <SkeletonText height="14px" />
      </div>
    );

  return (
    <S.List>
      <S.HiddenCheckbox
        type="checkbox"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
        }}
        id={id}
        checked={checked}
      />
      <S.Label htmlFor={id} onClick={onClick}>
        <S.Checkbox>
          <IconCheckbox isChecked={checked} />
          <h1>{info.name}</h1>
        </S.Checkbox>
        <p>-{Math.floor((price / 100) * info.discount).toLocaleString()}</p>
      </S.Label>
    </S.List>
  );
};

export default ProductDiscountList;
