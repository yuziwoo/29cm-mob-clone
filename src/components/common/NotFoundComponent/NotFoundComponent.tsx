import { ComponentStyle as S } from './NotFoundComponent.styled';
import CommonButton from '../motion/CommonButton/CommonButton';
import { ROUTE_PATH } from '../../../constants/path';
import { useRouter } from '../../../hooks/useRouter';
import { useCallback } from 'react';

const NotFoundComponent = () => {
  /**
   * 존재하지 않는 페이지 접근시 사용하는 컴포넌트입니다.
   */

  const { navigate } = useRouter();

  const handleClickBackHome = useCallback(() => {
    navigate(ROUTE_PATH.root);
  }, [navigate]);

  return (
    <S.Component>
      <S.NoResult>
        존재하지 않는 페이지입니다.
        <br />
        <CommonButton>
          <S.BackHome onClick={handleClickBackHome}>홈으로 이동하기</S.BackHome>
        </CommonButton>
      </S.NoResult>
    </S.Component>
  );
};

export default NotFoundComponent;
