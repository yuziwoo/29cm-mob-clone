import type { Meta, StoryObj } from '@storybook/react';
import HeaderShadow from './HeaderShadow';

const meta = {
  title: 'common/Header/HeaderShadow',
  component: HeaderShadow,
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderShadow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
