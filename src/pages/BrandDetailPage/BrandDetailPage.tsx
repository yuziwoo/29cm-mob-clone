import CommonPageAnimation from '../../components/common/motion/CommonPageAnimation/CommonPageAnimation';
import { useBrand } from '../../hooks/brand/useBrand';
import { PageStyle as S } from './BrandDetailPage.styled';
import { useParams } from 'react-router-dom';
import SkeletonLoading from '../../components/skeleton/common/SkeletonLoading';
import { useCallback, useEffect, useState } from 'react';
import { FetchBrandProps } from '../../types/brand';
import CommonButton from '../../components/common/motion/CommonButton/CommonButton';
import { useRouter } from '../../hooks/useRouter';
import { ROUTE_PATH } from '../../constants/path';
import ShowcaseSwiper from '../../components/showcase/ShowcaseSwiper/ShowcaseSwiper';
import BrandProductList from '../../components/brand/BrandProductList/BrandProductList';

const BrandDetailPage = () => {
  const { id } = useParams();
  const { brandQuery } = useBrand();
  const { navigate } = useRouter();

  const [brand, setBrand] = useState<FetchBrandProps | null>(null);

  useEffect(() => {
    if (!brandQuery.isSuccess || brandQuery.data === null) return;
    const currentBrand = brandQuery.data.find(({ id: brandId }) => `${brandId}` === id);
    if (currentBrand === undefined) return;

    setBrand(currentBrand);
  }, [brandQuery.data, id, brandQuery.isSuccess]);

  const handleClickBackHome = useCallback(() => {
    navigate(ROUTE_PATH.root);
  }, [navigate]);

  if (!brandQuery.isSuccess)
    return (
      <S.Page>
        <S.Loading>
          <SkeletonLoading />
        </S.Loading>
      </S.Page>
    );

  if (brand === null || id === undefined)
    return (
      <S.Page>
        <S.NoBrandResult>
          존재하지 않는 페이지입니다.
          <br />
          <CommonButton>
            <S.BackHome onClick={handleClickBackHome}>홈으로 이동하기</S.BackHome>
          </CommonButton>
        </S.NoBrandResult>
      </S.Page>
    );

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
