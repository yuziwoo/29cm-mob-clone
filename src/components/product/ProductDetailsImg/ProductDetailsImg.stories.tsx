import { Meta, StoryObj } from '@storybook/react';
import ProductDetailsImg from './ProductDetailsImg';
import { mockProduct } from '../../../mock/product';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'Product/ProductDetailsImg',
  component: ProductDetailsImg,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ProductDetailsImg>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgURL: mockProduct.product.imgURL,
  },
};

export const NoShowAllButton: Story = {
  args: {
    imgURL: mockProduct.product.thumb[0],
  },
};

export const Skeleton: Story = {
  args: {
    imgURL: undefined,
  },
};
