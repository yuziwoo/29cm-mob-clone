import { Meta, StoryObj } from '@storybook/react';
import StarRating from './StarRating';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'Product/StarRating',
  component: StarRating,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '100%', padding: '0 16px', maxWidth: '120px', margin: 'auto' }}>
        <StorybookDecorator>
          <Story />
        </StorybookDecorator>
      </div>
    ),
  ],
} satisfies Meta<typeof StarRating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    percentage: 0,
  },
};

export const Full: Story = {
  args: {
    percentage: 100,
  },
};

export const Percentage30: Story = {
  args: {
    percentage: 30,
  },
};

export const Skeleton: Story = {
  args: {
    percentage: undefined,
  },
};
