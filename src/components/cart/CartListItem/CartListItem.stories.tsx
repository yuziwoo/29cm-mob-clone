import { Meta, StoryObj } from '@storybook/react';
import CartListItem from './CartListItem';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { mockProduct } from '../../../mock/product';

const meta = {
  title: 'cart/CartListItem',
  component: CartListItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof CartListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    productId: mockProduct.productId,
    isChecked: true,
    onToggleCheck: () => {},
    onCountChange: (count: number) => {},
    count: 1,
    options: { 사이즈: 'M' },
    onRemoveItem: () => {},
  },
};

export const Unchecked: Story = {
  args: {
    productId: mockProduct.productId,
    isChecked: false,
    onToggleCheck: () => {},
    onCountChange: (count: number) => {},
    count: 1,
    options: { 사이즈: 'M' },
    onRemoveItem: () => {},
  },
};
