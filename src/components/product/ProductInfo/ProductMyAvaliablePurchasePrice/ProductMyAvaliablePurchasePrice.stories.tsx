import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from '../../../../styles/GlobalStyle';
import ProductMyAvaliablePurchasePrice from './ProductMyAvaliablePurchasePrice';
import { mockCouponDiscount, mockPaymentDiscount } from '../../../../mock/product';

const meta = {
  title: 'Product/ProductInfo/ProductMyAvaliablePurchasePrice',
  component: ProductMyAvaliablePurchasePrice,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '100%', padding: '0 16px', maxWidth: '550px', margin: 'auto' }}>
        <BrowserRouter>
          <RecoilRoot>
            <GlobalStyle />
            <Story />
          </RecoilRoot>
        </BrowserRouter>
      </div>
    ),
  ],
} satisfies Meta<typeof ProductMyAvaliablePurchasePrice>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    counponDiscounts: mockCouponDiscount,
    paymentDiscounts: mockPaymentDiscount,
    originalPrice: 100000,
    brandDiscount: 10,
    priceAfterBrandDiscount: 90000,
  },
};
