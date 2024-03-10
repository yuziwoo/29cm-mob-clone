import { Meta, StoryObj } from '@storybook/react';
import { mockCouponDiscount } from '../../../../mock/product';
import ProductDiscountList from './ProductDiscountList';
import StorybookDecorator from '../../../storybook/StorybookDecorator';

const meta = {
  title: 'Product/ProductInfo/ProductDiscountList',
  component: ProductDiscountList,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
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

export const Skeleton: Story = {
  args: {
    price: undefined,
    info: mockCouponDiscount[0],
    checked: true,
    onClick: () => {},
  },
};
