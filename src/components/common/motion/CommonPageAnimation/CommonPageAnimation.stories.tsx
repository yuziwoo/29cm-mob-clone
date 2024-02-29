import type { Meta, StoryObj } from '@storybook/react';
import StorybookDecorator from '../../../storybook/StorybookDecorator';
import CommonPageAnimation from './CommonPageAnimation';

const meta = {
  title: 'common/motion/CommonPageAnimation',
  component: CommonPageAnimation,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '페이지 오픈 시 발생하는 오픈 애니메이션',
  },
  decorators: [
    (Story) => (
      <StorybookDecorator>
        <Story />
      </StorybookDecorator>
    ),
  ],
} satisfies Meta<typeof CommonPageAnimation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: <h1>page 내용</h1> },
};
