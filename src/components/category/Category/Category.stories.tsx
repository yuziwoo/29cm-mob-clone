import { Meta, StoryObj } from '@storybook/react';
import Category from './Category';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'category/Category',
  component: Category,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof Category>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
