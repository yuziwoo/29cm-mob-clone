import { Meta, StoryObj } from '@storybook/react';
import MyListButton from './MyListButton';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'my/MyListButton',
  component: MyListButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof MyListButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '텍스트',
    onClick: () => {},
  },
};

export const ChangeText: Story = {
  args: {
    text: '원하는 텍스트 설정',
    onClick: () => {},
  },
};