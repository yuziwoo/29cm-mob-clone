import { Meta, StoryObj } from '@storybook/react';
import SwiperFade from './SwiperFade';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { mockShowcase } from '../../../mock/showcase';

const meta = {
  title: 'design/SwiperFade',
  component: SwiperFade,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof SwiperFade>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgURL: mockShowcase[0].mainSwiper.img,
  },
};
