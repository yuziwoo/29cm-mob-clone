import { Meta, StoryObj } from '@storybook/react';
import { mockProduct } from '../../../mock/product';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import ListProductSimple from './ListProductSimple';

const meta = {
  title: 'Product/ListProductSimple',
  component: ListProductSimple,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <div style={{ width: '200px' }}>
          <Story />
        </div>
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ListProductSimple>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: mockProduct.product,
    productId: mockProduct.productId,
  },
};

export const Skeleton: Story = {
  args: {
    product: undefined,
    productId: undefined,
  },
};