export type ProductOptionProps = Record<string, string[]>;

export type ProductProps = {
  name: string;
  categoryLarge: string;
  categoryMedium: string;
  option: ProductOptionProps;
  salesVolume: number;
  thumb: string[];
  imgURL: string;
  brandId: number;
  brandName: string;
  price: number;
  discount: number;
  likes: number;
  review: number;
  reviewRating: number;
};

export type Products = Record<string, ProductProps>;

export type DiscountDetail = {
  name: string;
  discount: number;
};

export type ProductWithId = ProductProps & { productId: string };

export type ReviewInfo = {
  rate: number;
  review: string;
  height: number;
  weight: number;
  fit: string;
  imgs: string[];
  writerId: string;
};

// 상품 상세페이지에서 상품의 옵션을 고를 때 사용하는 타입
export type SelectedOption = { count: number; option: Record<string, string> };
