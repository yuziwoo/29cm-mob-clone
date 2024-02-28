import { Meta, StoryObj } from '@storybook/react';
import RecommendedProducts from './RecommendedProducts';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { mockProduct } from '../../../mock/product';

const meta = {
  title: 'Product/RecommendedProducts',
  component: RecommendedProducts,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof RecommendedProducts>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockProducts = {
  p1001: mockProduct.product,
  p1002: mockProduct.product,
  p1003: mockProduct.product,
  p1004: mockProduct.product,
};

export const Default: Story = {
  args: {
    products: mockProducts,
  },
};

export const ChangeTitle: Story = {
  args: {
    products: mockProducts,
    title: '제목을 변경할 수 있습니다.',
  },
};
