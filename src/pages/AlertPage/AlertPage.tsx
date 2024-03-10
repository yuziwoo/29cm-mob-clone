import { PageStyle as S } from './AlertPage.styled';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/auth';
import { useEffect } from 'react';
import { ROUTE_PATH } from '../../constants/path';
import { useRouter } from '../../hooks/useRouter';
import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';

const AlertPage = () => {
  /**
   * 알림 페이지입니다.
   * 알림 없음으로 표시합니다.
   */
  const [user] = useRecoilState(userState);
  const { navigate } = useRouter();

  useEffect(() => {
    if (user) return;
    navigate(ROUTE_PATH.login, { state: { path: ROUTE_PATH.alert }, replace: true });
    // eslint-disable-next-line
  }, []);
  return (
    <CommonPageAnimation>
      <S.Page>
        <S.Text>현재 받은 알림이 없습니다.</S.Text>
      </S.Page>
    </CommonPageAnimation>
  );
};

export default AlertPage;
