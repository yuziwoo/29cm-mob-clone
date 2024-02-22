interface ProductDetailMainSwiperProps {
  thumbs: string[];
}

const ProductDetailMainSwiper = ({ thumbs }: ProductDetailMainSwiperProps) => {
  if (thumbs.length === 1) return <img src={thumbs[0]} alt='상품 이미지' />
  return <div></div>;
};

export default ProductDetailMainSwiper;
