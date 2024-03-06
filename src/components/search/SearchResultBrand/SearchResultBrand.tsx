import { BrandProps } from '../../../types/brand';
import { ComponentStyle as S } from './SearchResultBrand.styled';
import IconRightArrow2 from '../../icons/IconRightArrow2';
import { theme } from '../../../styles/theme';
import { motion } from 'framer-motion';
import { motionStyle } from '../../../styles/motion';
import { useRouter } from '../../../hooks/useRouter';
import { useCallback } from 'react';
import { ROUTE_PATH } from '../../../constants/path';
import ShowcaseSwiper from '../../brand/ShowcaseSwiper/ShowcaseSwiper';

interface SearchResultBrandProps {
  brand: BrandProps;
}

const SearchResultBrand = ({ brand }: SearchResultBrandProps) => {
  const { id, nameKo, nameEn, thumb, showcase } = brand;
  const { navigate } = useRouter();

  const handleClickBrand = useCallback(() => {
    navigate(ROUTE_PATH.brandDetail.replace(':id', `${id}`));
  }, [id, navigate]);

  return (
    <S.Component>
      <motion.div
        whileTap={motionStyle.opacityButton.whileTap}
        transition={motionStyle.opacityButton.transition}
        style={{ margin: '2rem 0', cursor: 'pointer' }}
        onClick={handleClickBrand}
      >
        <S.Brand>
          <S.Info>
            <S.Thumb style={{ backgroundImage: `url(${thumb})` }}></S.Thumb>
            <S.Name>
              <S.NameKo>{nameKo}</S.NameKo>
              <S.NameEn>{nameEn}</S.NameEn>
            </S.Name>
          </S.Info>
          <S.Arrow>
            <IconRightArrow2 color={theme.color.GRAY5} />
          </S.Arrow>
        </S.Brand>
      </motion.div>
      <S.Showcase>
        <ShowcaseSwiper showcaseIds={Object.values(showcase)} />
      </S.Showcase>
    </S.Component>
  );
};

export default SearchResultBrand;
