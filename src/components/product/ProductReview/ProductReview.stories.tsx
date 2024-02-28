import { Meta, StoryObj } from '@storybook/react';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { mockReview } from '../../../mock/product';
import ProductReview from './ProductReview';

const meta = {
  title: 'Product/ProductReview',
  component: ProductReview,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ProductReview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    reviews: mockReview,
  },
};

export const Skeleton: Story = {
  args: {
    reviews: undefined,
  },
};
