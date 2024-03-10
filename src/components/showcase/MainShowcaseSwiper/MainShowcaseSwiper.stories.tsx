import { Meta, StoryObj } from '@storybook/react';
import MainShowcaseSwiper from './MainShowcaseSwiper';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { mockShowcaseIds } from '../../../mock/showcase';

const meta = {
  title: 'showcase/MainShowcaseSwiper',
  component: MainShowcaseSwiper,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof MainShowcaseSwiper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { showcaseIds: mockShowcaseIds },
};
