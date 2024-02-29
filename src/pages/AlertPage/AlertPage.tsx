import { PageStyle as S } from './AlertPage.styled';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/auth';
import { useEffect } from 'react';
import { ROUTE_PATH } from '../../constants/path';
import { useRouter } from '../../hooks/useRouter';

const AlertPage = () => {
  const [user] = useRecoilState(userState);
  const { navigate } = useRouter();

  useEffect(() => {
    if (user) return;
    navigate(ROUTE_PATH.login, { state: { path: ROUTE_PATH.alert }, replace: true });
    // eslint-disable-next-line
  }, []);
  return <S.Page>AlertPage</S.Page>;
};

export default AlertPage;
