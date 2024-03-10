import { Meta, StoryObj } from '@storybook/react';
import ListProductBasic from './ListProductBasic';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { mockProduct } from '../../../mock/product';

const meta = {
  title: 'product/ListProductBasic',
  component: ListProductBasic,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ListProductBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    productId: mockProduct.productId,
  },
};
