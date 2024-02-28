import { ProductProps } from '../types/product';

export const mockCouponDiscount = [
  { name: '신규 고객 30% 할인쿠폰', discount: 30 },
  { name: '신규 고객 10% 할인쿠폰', discount: 10 },
];

export const mockPaymentDiscount = [
  {
    name: '[토스페이] 생애 첫 결제 10% 할인',
    discount: 10,
  },
  { name: '[현대카드] 생애 첫 결제 5% 할인', discount: 5 },
];

const product: ProductProps = {
  name: '크롭 패디드 숄더 해링턴 자켓 (브라운)',
  categoryLarge: 'man',
  categoryMedium: '아우터',
  option: ['S', 'M', 'L'],
  salesVolume: 0,
  thumb: ['../img/products/p1001-1.jpg', '../img/products/p1001-2.jpg'],
  imgURL: '../img/products/p1001-detail.jpg',
  brandId: 100,
  brandName: '쿠어',
  price: 210000,
  discount: 190000,
  likes: 321,
  review: 276,
  reviewRating: 95,
};

export const mockProduct = {
  productId: 'p1001',
  product,
};
