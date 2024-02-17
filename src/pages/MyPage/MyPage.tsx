import { headerStateBlack } from '../../recoil/headerState';
import useSetHeaderState from '../../hooks/useSetHeaderState';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/auth';
import { useEffect } from 'react';
import { ROUTE_PATH } from '../../constants/path';
import { useRouter } from '../../hooks/useRouter';
import { theme } from '../../styles/theme';
import MyUserInfo from '../../components/my/MyUserInfo/MyUserInfo';

const MyPage = () => {
  useSetHeaderState(headerStateBlack);

  const [user] = useRecoilState(userState);
  const { navigate } = useRouter();

  useEffect(() => {
    if (user) return;
    navigate(ROUTE_PATH.login, { state: { path: ROUTE_PATH.my } });
    // eslint-disable-next-line
  }, []);

  if (user === null) return <div></div>;

  return (
    <section style={{ padding: theme.padding.BODY_WITH_BOTTOM_MARGIN }}>
      <MyUserInfo user={user} />
    </section>
  );
};

export default MyPage;
