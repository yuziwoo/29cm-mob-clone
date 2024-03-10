import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { useBrand } from '../../hooks/brand/useBrand';
import { PageStyle as S } from './BrandDetailPage.styled';
import { useParams } from 'react-router-dom';
import SkeletonLoading from '../../components/skeleton/common/SkeletonLoading';
import { useEffect, useState } from 'react';
import { FetchBrandProps } from '../../types/brand';
import ShowcaseSwiper from '../../components/showcase/ShowcaseSwiper/ShowcaseSwiper';
import BrandProductList from '../../components/brand/BrandProductList/BrandProductList';
import NotFoundComponent from '../../components/common/NotFoundComponent/NotFoundComponent';

const BrandDetailPage = () => {
  const { id } = useParams();
  const { brandQuery } = useBrand();

  const [brand, setBrand] = useState<FetchBrandProps | null>(null);

  useEffect(() => {
    if (!brandQuery.isSuccess || brandQuery.data === null) return;
    const currentBrand = brandQuery.data.find(({ id: brandId }) => `${brandId}` === id);
    if (currentBrand !== undefined) {
      setBrand(currentBrand);
    }
  }, [brandQuery.data, id, brandQuery.isSuccess]);

  if (!brandQuery.isSuccess)
    return (
      <S.Page>
        <S.Loading>
          <SkeletonLoading />
        </S.Loading>
      </S.Page>
    );

  if (brand === null || id === undefined) return <NotFoundComponent />;
  return (
    <CommonPageAnimation>
      <S.Page>
        <S.Main style={{ backgroundImage: `url(${brand.mainImg})` }}>
          <S.Shadow />
          <S.NameEn>{brand.nameEn}</S.NameEn>
          <S.NameKo>{brand.nameKo}</S.NameKo>
          <S.Intro>{brand.introduce}</S.Intro>
        </S.Main>

        <S.Title style={{ paddingBottom: '2rem' }}>쇼케이스</S.Title>
        <S.Showcase>
          <ShowcaseSwiper showcaseIds={brand.showcase} />
        </S.Showcase>

        <S.Title>상품</S.Title>
        <BrandProductList brandId={isNaN(+id) ? null : +id} />
      </S.Page>
    </CommonPageAnimation>
  );
};

export default BrandDetailPage;
