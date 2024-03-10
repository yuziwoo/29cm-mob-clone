import { Meta, StoryObj } from '@storybook/react';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { mockProduct } from '../../../mock/product';
import ListProductRanked from './ListProductRanked';

const meta = {
  title: 'product/ListProductRanked',
  component: ListProductRanked,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ListProductRanked>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    productId: mockProduct.productId,
    rank: 1,
  },
};
