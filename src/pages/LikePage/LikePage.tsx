import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { useLikeList } from '../../hooks/like/useLikeList';
import { PageStyle as S } from './LikePage.styled';
import LikePageSkeleton from './LikePageSkeleton';
import ListProductBasic from '../../components/product/ListProductBasic/ListProductBasic';
import { useRecoilState } from 'recoil';
import { useRouter } from '../../hooks/useRouter';
import { useEffect } from 'react';
import { ROUTE_PATH } from '../../constants/path';
import { userState } from '../../recoil/auth';
import NotFoundComponent from '../../components/common/NotFoundComponent/NotFoundComponent';

const LikePage = () => {
  const [user] = useRecoilState(userState);
  const { navigate } = useRouter();

  useEffect(() => {
    if (user) return;
    navigate(ROUTE_PATH.login, { state: { path: ROUTE_PATH.like }, replace: true });
    // eslint-disable-next-line
  }, []);

  const { likeQuery } = useLikeList();

  if (!likeQuery.isSuccess) return <LikePageSkeleton></LikePageSkeleton>;
  if (likeQuery.data === undefined || likeQuery.data === null) return <NotFoundComponent />;
  return (
    <CommonPageAnimation>
      <S.Page>
        <S.Title>좋아요한 상품</S.Title>

        <S.Ul>
          {Object.keys(likeQuery.data).map((productId) => (
            <S.List key={productId}>
              <ListProductBasic productId={productId} />
            </S.List>
          ))}
        </S.Ul>
      </S.Page>
    </CommonPageAnimation>
  );
};

export default LikePage;
