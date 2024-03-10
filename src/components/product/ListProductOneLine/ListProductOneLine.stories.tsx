import { Meta, StoryObj } from '@storybook/react';
import { mockProduct } from '../../../mock/product';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import ListProductOneLine from './ListProductOneLine';

const meta = {
  title: 'Product/ListProductOneLine',
  component: ListProductOneLine,
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
} satisfies Meta<typeof ListProductOneLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    productId: mockProduct.productId,
  },
};
