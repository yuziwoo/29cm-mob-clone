import { Meta, StoryObj } from '@storybook/react';
import ProductMyAvaliablePurchasePrice from './ProductAvaliablePrice';
import { mockCouponDiscount, mockPaymentDiscount } from '../../../../mock/product';
import StorybookDecorator from '../../../storybook/StorybookDecorator';

const meta = {
  title: 'Product/ProductInfo/ProductMyAvaliablePurchasePrice',
  component: ProductMyAvaliablePurchasePrice,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
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

export const Skeleton: Story = {
  args: {
    counponDiscounts: undefined,
    paymentDiscounts: mockPaymentDiscount,
    originalPrice: 100000,
    brandDiscount: 10,
    priceAfterBrandDiscount: 90000,
  },
};
