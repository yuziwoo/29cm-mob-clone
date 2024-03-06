import { useEffect, useState } from 'react';
import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import SkeletonLoading from '../../components/skeleton/common/SkeletonLoading';
import { useSearch } from '../../hooks/search/useSearch';
import { PageStyle as S } from './SearchDetailPage.styled';
import { useParams } from 'react-router-dom';
import { useRouter } from '../../hooks/useRouter';
import { FormatedProductProps } from '../../types/product';
import { BrandProps } from '../../types/brand';
import ListProductBasic from '../../components/product/ListProductBasic/ListProductBasic';
import NoSearchResult from '../../components/search/NoSearchResult/NoSearchResult';
import SearchResultBrand from '../../components/search/SearchResultBrand/SearchResultBrand';

const SearchDetailPage = () => {
  const { keyword } = useParams();
  const { navigate } = useRouter();
  const { searchBrand, searchProduct } = useSearch(keyword);

  const [brands, setBrands] = useState<BrandProps[] | null>(null);
  const [products, setProducts] = useState<null | FormatedProductProps[]>(null);

  useEffect(() => {
    if (keyword === undefined || keyword === '' || searchBrand.data === undefined) return;
    setBrands(searchBrand.data);
  }, [searchBrand.data, keyword]);

  useEffect(() => {
    if (keyword === undefined || keyword === '' || searchProduct.data === undefined) return;
    setProducts(searchProduct.data);
  }, [searchProduct.data, keyword]);

  // 새롭게 검색 중
  if (searchBrand.isPending || searchProduct.isPending)
    return (
      <S.Page>
        <S.Loading>
          <SkeletonLoading />
        </S.Loading>
      </S.Page>
    );

  // 검색 결과 없음
  if (brands?.length === 0 && products?.length === 0)
    return (
      <CommonPageAnimation>
        <S.Page>
          <NoSearchResult />
        </S.Page>
      </CommonPageAnimation>
    );

  return (
    <CommonPageAnimation>
      <S.Page>
        <S.Title>브랜드</S.Title>
        {brands !== null &&
          brands.map((brand) => <SearchResultBrand brand={brand} key={brand.id} />)}
        <S.Title>상품</S.Title>
        <S.ProductList>
          {products !== null &&
            products.map(({ productId }) => (
              <S.Product key={productId}>
                <ListProductBasic productId={productId} />
              </S.Product>
            ))}
        </S.ProductList>
      </S.Page>
    </CommonPageAnimation>
  );
};

export default SearchDetailPage;
