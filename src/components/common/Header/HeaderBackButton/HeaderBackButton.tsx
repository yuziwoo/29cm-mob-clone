import { useRouter } from '../../../../hooks/useRouter';
import { ComponentStyle as S } from './HeaderBackButton.styled';
import CommonButton from '../../motion/CommonButton/CommonButton';
import IconLeftArrow from '../../../icons/IconLeftArrow';
import { theme } from '../../../../styles/theme';

const HeaderBackButton = () => {
  /**
   * Header의 뒤로가기 버튼 컴포넌트입니다.
   */
  
  const { navigate } = useRouter();

  const handleClickBackbutton = () => {
    navigate(-1);
  };
  return (
    <CommonButton onClick={handleClickBackbutton}>
      <S.Component>
        <IconLeftArrow color={theme.color.BLACK} />
      </S.Component>
    </CommonButton>
  );
};

export default HeaderBackButton;
