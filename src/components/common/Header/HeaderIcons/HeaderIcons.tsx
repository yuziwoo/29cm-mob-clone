import * as S from './HeaderIcons.styled';
import IconAlert from '../../../icons/IconAlert';
import IconCart from '../../../icons/IconCart';
import IconSearch from '../../../icons/IconSearch';
import { theme } from '../../../../styles/theme';

const HeaderIcons = () => {
  const handleClickAlert = () => {};
  const handleClickCart = () => {};
  
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
