import type { Meta, StoryObj } from '@storybook/react';
import HeaderCategory from './HeaderCategory';
import StorybookDecorator from '../../../storybook/StorybookDecorator';

const meta = {
  title: 'common/Header/HeaderCategory',
  component: HeaderCategory,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <div style={{ background: 'rgb(0, 0, 0, 0.3)' }}>
          <Story />
        </div>
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof HeaderCategory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

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
