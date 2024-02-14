import * as S from './HeaderIcons.styled';
import IconAlert from '../../../icons/IconAlert';
import IconCart from '../../../icons/IconCart';
import IconSearch from '../../../icons/IconSearch';
import { theme } from '../../../../styles/theme';
import { useRecoilState } from 'recoil';
import { userState } from '../../../../recoil/auth';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../../../../constants/path';

const HeaderIcons = () => {
  const [user] = useRecoilState(userState);
  const navigate = useNavigate();

  const handleClickAlert = () => {
    if (user) {
      navigate(ROUTE_PATH.alert);
      return;
    }
    navigate(ROUTE_PATH.login);
  };
  const handleClickCart = () => {
    if (user) {
      navigate(ROUTE_PATH.cart);
      return;
    }
    navigate(ROUTE_PATH.login);
  };

  return (
    <S.Icons className="icons">
      <button>
        <IconSearch color={theme.color.WHITE} />
      </button>
      <button onClick={handleClickAlert}>
        <IconAlert color={theme.color.WHITE} />
      </button>
      <button onClick={handleClickCart}>
        <IconCart color={theme.color.WHITE} />
      </button>
    </S.Icons>
  );
};

export default HeaderIcons;
