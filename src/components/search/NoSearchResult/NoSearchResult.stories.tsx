import { Meta, StoryObj } from '@storybook/react';
import NoSearchResult from './NoSearchResult';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'search/NoSearchResult',
  component: NoSearchResult,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof NoSearchResult>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
