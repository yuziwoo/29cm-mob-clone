import { Meta, StoryObj } from '@storybook/react';
import RecentSearch from './RecentSearch';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'search/RecentSearch',
  component: RecentSearch,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof RecentSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    recentSearch: '쿠어,소니',
    onChangeRecentSearch: (newRecentSearch: string) => {},
  },
};
