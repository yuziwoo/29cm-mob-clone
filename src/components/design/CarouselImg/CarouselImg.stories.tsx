import { Meta, StoryObj } from '@storybook/react';
import CarouselImg from './CarouselImg';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { mockProduct } from '../../../mock/product';

const meta = {
  title: 'design/CarouselImg',
  component: CarouselImg,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof CarouselImg>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: mockProduct.product.thumb[0],
    height: '100px',
  },
};
