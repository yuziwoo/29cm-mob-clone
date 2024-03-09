import { Meta, StoryObj } from '@storybook/react';
import ScrollShrinkImg from './ScrollShrinkImg';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { mockProduct } from '../../../mock/product';

const meta = {
  title: 'design/ScrollShrinkImg',
  component: ScrollShrinkImg,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ScrollShrinkImg>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { imgURL: mockProduct.product.thumb[0] },
};

export const NoImgDefaultAlt: Story = {
  args: { imgURL: '' },
};

export const NoImgCustomAlt: Story = {
  args: { imgURL: '', alt: '직접 지정한 Alt' },
};
