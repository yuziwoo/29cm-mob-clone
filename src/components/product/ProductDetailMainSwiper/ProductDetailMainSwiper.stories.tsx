import { Meta, StoryObj } from '@storybook/react';
import ProductDetailMainSwiper from './ProductDetailMainSwiper';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'Product/ProductDetailMainSwiper',
  component: ProductDetailMainSwiper,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ProductDetailMainSwiper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbs: ['../img/products/p1001-1.jpg', '../img/products/p1001-2.jpg'],
  },
};

export const OneImg: Story = {
  args: {
    thumbs: ['../img/products/p1001-1.jpg'],
  },
};

export const FiveImg: Story = {
  args: {
    thumbs: [
      '../img/products/p1001-1.jpg',
      '../img/products/p1001-2.jpg',
      '../img/products/p1002-1.jpg',
      '../img/products/p1002-2.jpg',
      '../img/products/p1003-1.jpg',
    ],
  },
};

export const Skeleton: Story = {
  args: {
    thumbs: undefined,
  },
};
