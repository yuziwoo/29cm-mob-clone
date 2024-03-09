import { useCallback } from 'react';
import { useRouter } from '../../../hooks/useRouter';
import { ComponentStyle as S } from './BrandIntro.styled';
import { ROUTE_PATH } from '../../../constants/path';
import ListProductOneLine from '../../product/ListProductOneLine/ListProductOneLine';

interface BrandIntroProps {
  imgURL: string;
  title: string;
  text: string;
  brandId: string;
  productIds: string[];
}

const BrandIntro = ({ imgURL, title, text, brandId, productIds }: BrandIntroProps) => {
  const { navigate } = useRouter();

  const navigateBrandPage = useCallback(() => {
    navigate(ROUTE_PATH.brandDetail.replace(':id', brandId));
  }, [navigate, brandId]);

  return (
    <S.Component>
      <S.Intro onClick={navigateBrandPage}>
        <S.Img src={imgURL} alt="브랜드 소개 썸네일 이미지" />
        <S.Title>{title}</S.Title>
        <S.Description>{text}</S.Description>
      </S.Intro>

      <S.Products>
        {productIds.map((productId) => (
          <ListProductOneLine productId={productId} key={productId} />
        ))}
      </S.Products>
    </S.Component>
  );
};

export default BrandIntro;
