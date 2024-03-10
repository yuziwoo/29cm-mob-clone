import { Meta, StoryObj } from '@storybook/react';
import DescriptionBoard from './DescriptionBoard';
import StorybookDecorator from '../../storybook/StorybookDecorator';

const meta = {
  title: 'common/DescriptionBoard',
  component: DescriptionBoard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <div style={{ position: 'relative' }}>
          <h1>내용</h1>
          <Story />
        </div>
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof DescriptionBoard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showDescription: true,
    children: 'description',
  },
};
