import { Meta, StoryObj } from '@storybook/react';
import ProductInfo from './ProductInfo';
import { mockProduct } from '../../../mock/product';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'Product/ProductInfo',
  component: ProductInfo,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ProductInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: mockProduct.product,
    productId: mockProduct.productID,
  },
};

export const Skeleton: Story = {
  args: {
    product: undefined,
    productId: undefined,
  },
};
