import { Meta, StoryObj } from '@storybook/react';
import StorybookDecorator from '../../../storybook/StorybookDecorator';
import ProductReviewImgs from './ProductReviewImgs';
import { mockReview } from '../../../../mock/product';

const meta = {
  title: 'Product/ProductReview/ProductReviewImgs',
  component: ProductReviewImgs,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ProductReviewImgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgs: mockReview.map((review) => review.imgs[0]),
  },
};

export const Skeleton: Story = {
  args: {
    imgs: undefined,
  },
};
