import { headerStateOnlyBackButton } from '../../recoil/headerState';
import useSetHeaderState from '../../hooks/useSetHeaderState';
import * as S from './LoginPage.styled';
import IconLogo from '../../components/icons/IconLogo';
import { theme } from '../../styles/theme';

const LoginPage = () => {
  useSetHeaderState(headerStateOnlyBackButton);

  return (
    <S.SectionLogin>
      <S.Logo>
        <IconLogo color={theme.color.BLACK} />
      </S.Logo>

      <S.Title>
        <h1>로그인</h1>
      </S.Title>

      <S.Title>
        <h1>또는 다음으로 계속하기</h1>
      </S.Title>
    </S.SectionLogin>
  );
};

export default LoginPage;
