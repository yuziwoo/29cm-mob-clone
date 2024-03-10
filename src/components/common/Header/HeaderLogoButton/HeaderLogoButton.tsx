import { useRouter } from '../../../../hooks/useRouter';
import { ComponentStyle as S } from './HeaderLogoButton.styled';
import CommonButton from '../../motion/CommonButton/CommonButton';
import { theme } from '../../../../styles/theme';
import { scrollTop } from '../../../../utils/scrollTop';
import { ROUTE_PATH } from '../../../../constants/path';
import IconLogo from '../../../icons/IconLogo';

interface HeaderLogoButtonProps {
  firstPath: string;
  color?: string;
}

const HeaderLogoButton = ({ firstPath, color = theme.color.BLACK }: HeaderLogoButtonProps) => {
  /**
   * Header의 로고 버튼 컴포넌트입니다.
   */

  const { navigate } = useRouter();

  const handleClickLogo = () => {
    if (firstPath === '') {
      scrollTop();
      return;
    }
    navigate(ROUTE_PATH.root);
  };

  return (
    <CommonButton onClick={handleClickLogo}>
      <S.Component>
        <IconLogo color={color} />
      </S.Component>
    </CommonButton>
  );
};

export default HeaderLogoButton;
