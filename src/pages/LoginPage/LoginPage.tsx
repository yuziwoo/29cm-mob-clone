import { headerStateOnlyBackButton } from '../../recoil/headerState';
import useSetHeaderState from '../../hooks/useSetHeaderState';
import * as S from './LoginPage.styled';
import IconLogo from '../../components/icons/IconLogo';
import { theme } from '../../styles/theme';
import LoginForm from '../../components/login/LoginForm/LoginForm';
import SocialLogin from '../../components/login/SocialLogin/SocialLogin';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../../constants/path';

const LoginPage = () => {
  useSetHeaderState(headerStateOnlyBackButton);
  const navigate = useNavigate();

  return (
    <S.SectionLogin>
      <S.Logo>
        <IconLogo color={theme.color.BLACK} />
      </S.Logo>

      <S.Title>
        <h1>로그인</h1>
      </S.Title>

      <LoginForm />

      <S.CreateAccount>
        <a
          href={ROUTE_PATH.join}
          onClick={(e) => {
            e.preventDefault();
            navigate(ROUTE_PATH.join);
          }}
        >
          계정 만들기
        </a>
      </S.CreateAccount>

      <S.Title>
        <h1>또는 다음으로 계속하기</h1>
      </S.Title>

      <SocialLogin />
    </S.SectionLogin>
  );
};

export default LoginPage;
