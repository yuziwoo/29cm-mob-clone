import * as S from './ProductInfo.styled';
import { ProductProps } from '../../../types/product';
import ProductLikes from '../ProductLikes/ProductLikes';
import IconRightArrow2 from '../../icons/IconRightArrow2';
import { theme } from '../../../styles/theme';
import { useRouter } from '../../../hooks/useRouter';

interface ProductInfoProps {
  product: ProductProps;
  productId: string;
}

const ProductInfo = ({ product, productId }: ProductInfoProps) => {
  const { name, brandId, brandName, price, discount, review, reviewRating } = product;
  const { navigate } = useRouter();

  return (
    <S.SectionInfo>
      <S.BrandAndLikesWrap>
        <S.Brand
          onClick={() => {
            navigate(`/brand/${brandId}`);
          }}
        >
          <p>{brandName}</p>
          <IconRightArrow2 color={theme.color.GRAY7} />
        </S.Brand>
        <S.Like>
          <ProductLikes productId={productId ? productId : ''} />
        </S.Like>
      </S.BrandAndLikesWrap>

      <S.ProductName>{name}</S.ProductName>
    </S.SectionInfo>
  );
};

export default ProductInfo;