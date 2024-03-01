import { Meta, StoryObj } from '@storybook/react';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { mockProduct } from '../../../mock/product';
import CartPayingButton from './CartPayingButton';

const meta = {
  title: 'cart/CartPayingButton',
  component: CartPayingButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <div style={{ position: 'relative', height: '300px' }}>
          <Story />
        </div>
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof CartPayingButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cartData: [{ productId: mockProduct.productId, count: 1, options: {} }],
  },
};
