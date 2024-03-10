import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import ListProductRanked from '../../components/product/ListProductRanked/ListProductRanked';
import { useProduct } from '../../hooks/product/useProduct';
import { PageStyle as S } from './BestPage.styled';

const BestPage = () => {
  const { productQuery } = useProduct();

  if (!productQuery.isSuccess || productQuery.data === undefined || productQuery.data === null)
    return <></>;

  return (
    <CommonPageAnimation>
      <S.Page>
        <S.ProductList>
          {Object.keys(productQuery.data).map((productId, index) => (
            <S.Product key={productId}>
              <ListProductRanked productId={productId} rank={index + 1} />
            </S.Product>
          ))}
        </S.ProductList>
      </S.Page>
    </CommonPageAnimation>
  );
};

export default BestPage;
