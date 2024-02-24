export type ProductProps = {
  name: string;
  categoryLarge: string;
  categoryMedium: string;
  option: string[];
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
