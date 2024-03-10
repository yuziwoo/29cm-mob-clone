import { Meta, StoryObj } from '@storybook/react';
import ShowcaseSwiper from './ShowcaseSwiper';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { mockShowcaseIds } from '../../../mock/showcase';

const meta = {
  title: 'showcase/ShowcaseSwiper',
  component: ShowcaseSwiper,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof ShowcaseSwiper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showcaseIds: mockShowcaseIds,
  },
};

export const OneShowcase: Story = {
  args: {
    showcaseIds: [mockShowcaseIds[0]],
  },
};

export const NoShowcase: Story = {
  args: {
    showcaseIds: [],
  },
};
