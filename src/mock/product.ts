import { ProductProps, ReviewInfo } from '../types/product';

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

export const mockReview: ReviewInfo[] = [
  {
    rate: 10,
    review: '멋진 재킷이네요. 이번 여름 바다 놀러갈 때 이쁘게 잘 입었습니다.',
    height: 172,
    weight: 60,
    fit: '사이즈 잘 맞아요',
    imgs: ['../img/review/review.jpg'],
    writerId: 'batman0221',
  },
  {
    rate: 8.8,
    review: '재킷 잘 입었습니다 역시 멋지네요!',
    height: 180,
    weight: 72,
    fit: '조금 작아요',
    imgs: ['../img/review/review.jpg'],
    writerId: 'joker330',
  },
  {
    rate: 5.4,
    review: '리뷰들은 개발자가 작성한 가짜 리뷰입니다 🤫',
    height: 160,
    weight: 51,
    fit: '조금 커요',
    imgs: ['../img/review/review.jpg'],
    writerId: 'iu123123',
  },
  {
    rate: 8.2,
    review: '멋진 재킷이네요. 이번 여름 바다 놀러갈 때 이쁘게 잘 입었습니다.',
    height: 5.2,
    weight: 0.2,
    fit: '사이즈 잘 맞아요',
    imgs: ['../img/review/review.jpg'],
    writerId: 'letitgo3030',
  },
  {
    rate: 3.6,
    review: '멋진 재킷이네요. 이번 여름 바다 놀러갈 때 이쁘게 잘 입었습니다.',
    height: 5.2,
    weight: 0.2,
    fit: '사이즈 잘 맞아요',
    imgs: ['../img/review/review.jpg'],
    writerId: 'coorcoor66',
  },
  {
    rate: 2.5,
    review: '멋진 재킷이네요. 이번 여름 바다 놀러갈 때 이쁘게 잘 입었습니다.',
    height: 5.2,
    weight: 0.2,
    fit: '사이즈 잘 맞아요',
    imgs: ['../img/review/review.jpg'],
    writerId: 'brown70',
  },
  {
    rate: 10,
    review: '멋진 재킷이네요. 이번 여름 바다 놀러갈 때 이쁘게 잘 입었습니다.',
    height: 5.2,
    weight: 0.2,
    fit: '사이즈 잘 맞아요',
    imgs: ['../img/review/review.jpg'],
    writerId: 'blackbrown',
  },
  {
    rate: 10,
    review: '멋진 재킷이네요. 이번 여름 바다 놀러갈 때 이쁘게 잘 입었습니다.',
    height: 5.2,
    weight: 0.2,
    fit: '사이즈 잘 맞아요',
    imgs: ['../img/review/review.jpg'],
    writerId: 'batpink21',
  },
];
