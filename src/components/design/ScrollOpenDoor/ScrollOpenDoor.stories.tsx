import { Meta, StoryObj } from '@storybook/react';
import ScrollOpenDoor from './ScrollOpenDoor';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { mockProduct } from '../../../mock/product';

const meta = {
  title: 'design/ScrollOpenDoor',
  component: ScrollOpenDoor,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ScrollOpenDoor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <img src={mockProduct.product.thumb[0]} alt="예시 이미지" />,
  },
};

export const DirectionRight: Story = {
  args: {
    children: <img src={mockProduct.product.thumb[0]} alt="예시 이미지" />,
    dir: 'right',
  },
};
