import type { Meta, StoryObj } from '@storybook/react';
import HeaderCategory from './HeaderCategory';

const meta = {
  title: 'common/Header/HeaderCategory',
  component: HeaderCategory,
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderCategory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    location: '',
  },
};

export const Man: Story = {
  args: {
    location: 'man',
  },
};

export const Woman: Story = {
  args: {
    location: 'woman',
  },
};

export const Life: Story = {
  args: {
    location: 'life',
  },
};

export const Best: Story = {
  args: {
    location: 'best',
  },
};