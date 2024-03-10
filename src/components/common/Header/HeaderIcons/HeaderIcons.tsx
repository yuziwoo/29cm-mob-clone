import { ComponentStyle as S } from './HeaderIcons.styled';
import IconAlert from '../../../icons/IconAlert';
import IconCart from '../../../icons/IconCart';
import IconSearch from '../../../icons/IconSearch';
import { theme } from '../../../../styles/theme';
import { ROUTE_PATH } from '../../../../constants/path';
import { useRouter } from '../../../../hooks/useRouter';
import useCart from '../../../../hooks/cart/useCart';
import { useEffect, useState } from 'react';
import CommonButton from '../../motion/CommonButton/CommonButton';

type DisplayIcon = 'search' | 'alert' | 'cart';

interface HeaderIconsProps {
  color: string;
  displayIcons?: DisplayIcon[];
}

const HeaderIcons = ({
  color = theme.color.WHITE,
  displayIcons = ['search', 'alert', 'cart'],
}: HeaderIconsProps) => {
  /**
   * Search, Alert, Cart 아이콘 묶음입니다.
   *
   * @params
   * color: icon의 색을 지정합니다.
   * displayIcons: ['search', 'alert', 'cart'] 3가지 아이콘 중 보여줄 아이콘을 넣어줍니다.
   */

  const { navigate } = useRouter();
  const { cartQuery } = useCart();
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    if (cartQuery.isSuccess && cartQuery.data !== undefined && cartQuery.data !== null) {
      setCartQuantity(Object.keys(cartQuery.data).length);
    }
  }, [cartQuery.isSuccess, cartQuery.data]);

  const handleClickSearch = () => {
    navigate(ROUTE_PATH.search);
  };

  const handleClickAlert = () => {
    navigate(ROUTE_PATH.alert);
  };
  const handleClickCart = () => {
    navigate(ROUTE_PATH.cart);
  };

  return (
    <S.Component>
      {displayIcons.includes('search') && (
        <S.ButtonWrap onClick={handleClickSearch}>
          <CommonButton>
            <S.IconWrap>
              <IconSearch color={color} />
            </S.IconWrap>
          </CommonButton>
        </S.ButtonWrap>
      )}

      {displayIcons.includes('alert') && (
        <S.ButtonWrap onClick={handleClickAlert}>
          <CommonButton>
            <S.IconWrap>
              <IconAlert color={color} />
            </S.IconWrap>
          </CommonButton>
        </S.ButtonWrap>
      )}

      {displayIcons.includes('cart') && (
        <S.ButtonWrap onClick={handleClickCart}>
          <CommonButton>
            <S.IconWrap>
              <IconCart color={color} />
            </S.IconWrap>
          </CommonButton>
          {cartQuantity > 0 && (
            <S.Count>
              <S.CountText>{cartQuantity}</S.CountText>
            </S.Count>
          )}
        </S.ButtonWrap>
      )}
    </S.Component>
  );
};

export default HeaderIcons;
