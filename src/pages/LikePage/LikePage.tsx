import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { useLikeList } from '../../hooks/like/useLikeList';
import { PageStyle as S } from './LikePage.styled';
import LikePageSkeleton from './LikePageSkeleton';
import ListProductBasic from '../../components/product/ListProductBasic/ListProductBasic';

const LikePage = () => {
  const { likeQuery } = useLikeList();

  if (!likeQuery.isSuccess) return <LikePageSkeleton></LikePageSkeleton>;
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
