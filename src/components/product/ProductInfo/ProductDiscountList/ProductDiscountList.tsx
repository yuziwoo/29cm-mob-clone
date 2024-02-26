import { useId } from 'react';
import * as S from './ProductDiscountList.style';
import { DiscountDetail } from '../../../../types/product';
import IconCheckbox from '../../../icons/IconCheckbox';

interface ProductDiscountListProps {
  price: number;
  info: DiscountDetail;
  checked: boolean;
  onClick: () => void;
}

const ProductDiscountList = ({ price, info, checked, onClick }: ProductDiscountListProps) => {
  const id = useId();
  const discount = Math.floor((price / 100) * info.discount);

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
        <p>-{discount.toLocaleString()}</p>
      </S.Label>
    </S.List>
  );
};

export default ProductDiscountList;
