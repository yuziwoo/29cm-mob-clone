import type { Meta, StoryObj } from '@storybook/react';
import CommonButton from './CommonButton';

const meta = {
  title: 'common/Motion/CommonButton',
  component: CommonButton,
  tags: ['autodocs'],
} satisfies Meta<typeof CommonButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: <h1>버튼</h1> },
};
