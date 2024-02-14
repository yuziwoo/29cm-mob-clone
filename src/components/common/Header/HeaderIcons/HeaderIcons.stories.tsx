import type { Meta, StoryObj } from '@storybook/react';
import HeaderIcons from './HeaderIcons';

const meta = {
  title: 'common/Header/HeaderIcons',
  component: HeaderIcons,
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderIcons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
