import { PageStyle as S } from './JoinPage.styled';
import IconLogo from '../../components/icons/IconLogo';
import { theme } from '../../styles/theme';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/auth';
import { useRouter } from '../../hooks/useRouter';
import { useEffect, useState } from 'react';
import { ROUTE_PATH } from '../../constants/path';
import { useLocation } from 'react-router-dom';
import CreateAccountForm from '../../components/join/CreateAccountForm/CreateAccountForm';
import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';

const JoinPage = () => {
  // login 유저 redirect
  const [user] = useRecoilState(userState);
  const { navigate } = useRouter();

  useEffect(() => {
    if (user) {
      navigate(ROUTE_PATH.root);
    }
    // eslint-disable-next-line
  }, []);

  // 이전에 방문하려던 페이지 저장
  const location = useLocation();
  const [redirectPath, setRedirectPath] = useState(ROUTE_PATH.root);

  useEffect(() => {
    if (location?.state?.path !== null) {
      setRedirectPath(location?.state?.path);
    }
  }, [location?.state]);

  return (
    <CommonPageAnimation>
      <S.Page>
        <S.Logo
          onClick={() => {
            navigate(ROUTE_PATH.root);
          }}
        >
          <IconLogo color={theme.color.BLACK} />
        </S.Logo>

        <S.Intro>
          <h1>
            28CM 계정 만들기
            <br />
            포트폴리오 전용 웹사이트입니다.
            <br />
            웹사이트 내에 존재하는 모든 상품과 이벤트는
            <br />
            모두 존재하지 않는 허구인 점 참고 부탁드립니다.
          </h1>
        </S.Intro>

        <CreateAccountForm redirectPath={redirectPath} />
      </S.Page>
    </CommonPageAnimation>
  );
};

export default JoinPage;
