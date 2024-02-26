import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Meta, StoryObj } from '@storybook/react';
import GlobalStyle from '../../../../styles/GlobalStyle';
import { mockCouponDiscount } from '../../../../mock/product';
import ProductDiscountList from './ProductDiscountList';

const meta = {
  title: 'Product/ProductInfo/ProductDiscountList',
  component: ProductDiscountList,
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
} satisfies Meta<typeof ProductDiscountList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    price: 10000,
    info: mockCouponDiscount[0],
    checked: false,
    onClick: () => {},
  },
};

export const Checked: Story = {
  args: {
    price: 10000,
    info: mockCouponDiscount[0],
    checked: true,
    onClick: () => {},
  },
};
