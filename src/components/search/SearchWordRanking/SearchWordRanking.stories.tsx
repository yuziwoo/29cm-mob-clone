import { Meta, StoryObj } from '@storybook/react';
import SearchWordRanking from './SearchWordRanking';
import StorybookDecorator from '../../storybook/StorybookDecorator';
import { mockSearchWordRanking } from '../../../mock/search';

const meta = {
  title: 'search/SearchWordRanking',
  component: SearchWordRanking,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof SearchWordRanking>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    words: mockSearchWordRanking,
    onClickKeywordRank: (keyword: string) => {},
  },
};
