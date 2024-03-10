import { useProduct } from '../../../hooks/product/useProduct';
import ListProductBasic from '../../product/ListProductBasic/ListProductBasic';
import { ComponentStyle as S } from './NoSearchResult.styled';

const NoSearchResult = () => {
  const { productQuery } = useProduct();

  return (
    <S.Component>
      <S.NoResult>
        <S.NoResultTitle>검색 결과가 없습니다.</S.NoResultTitle>
        <S.NoResultDescription>
          다른 검색어를 입력하시거나 <br />
          철자와 띄어쓰기를 확인해보세요.
        </S.NoResultDescription>
      </S.NoResult>

      {productQuery.isSuccess && (
        <>
          <S.Title>당신을 위한 추천 상품</S.Title>
          <S.ProductList>
            {Object.keys(productQuery.data).map((productId) => (
              <S.Product key={productId}>
                <ListProductBasic productId={productId} />
              </S.Product>
            ))}
          </S.ProductList>
        </>
      )}
    </S.Component>
  );
};

export default NoSearchResult;
